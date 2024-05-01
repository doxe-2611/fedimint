{ config, lib, pkgs, ... }:
with lib;

let
  eachFedimintd = filterAttrs (fedimintdName: cfg: cfg.enable) config.services.fedimintd;
  fedimintdOpts = { config, lib, name, ... }: {

    options = {

      enable = mkEnableOption (lib.mdDoc "fedimint");

      user = mkOption {
        type = types.str;
        default = "fedimintd-${name}";
        description = "The user as which to run fedimintd.";
      };

      group = mkOption {
        type = types.str;
        default = config.user;
        description = "The group as which to run fedimintd.";
      };

      extraEnvironment = mkOption {
        type = types.attrsOf types.str;
        description = lib.mdDoc "Extra Environment variables to pass to the fedimintd.";
        default = {
          RUST_BACKTRACE = "1";
        };
        example = {
          RUST_LOG = "info,fm=debug";
          RUST_BACKTRACE = "1";
        };
      };

      package = mkOption {
        type = types.nullOr types.package;
        default = pkgs.fedimintd or null;
        defaultText = lib.literalExpression "pkgs.fedimint (after available)";
        description = lib.mdDoc ''
          Package of the fedimintd to use.
        '';
      };

      p2p = {
        openFirewall = mkOption {
          type = types.bool;
          default = false;
          description = lib.mdDoc "Opens port in firewall for fedimintd's p2p port";
        };
        port = mkOption {
          type = types.port;
          default = 8173;
          description = lib.mdDoc "Port to bind on for p2p connections from peers";
        };
        bind = mkOption {
          type = types.str;
          default = "[::0]";
          description = lib.mdDoc "Address to bind on for p2p connections from peers";
        };
        address = mkOption {
          type = types.nullOr types.str;
          default = null;
          example = "fedimint://p2p.myfedimint.com";
          description = lib.mdDoc "Public address for p2p connections from peers";
        };
      };
      api = {
        openFirewall = mkOption {
          type = types.bool;
          default = false;
          description = lib.mdDoc "Opens port in firewall for fedimintd's api port";
        };
        port = mkOption {
          type = types.port;
          default = 8174;
          description = lib.mdDoc "Port to bind on for API connections relied by the reverse proxy/tls terminator.";
        };
        bind = mkOption {
          type = types.str;
          default = "[::0]";
          description = lib.mdDoc "Address to bind on for API connections relied by the reverse proxy/tls terminator. Usually starting with `fedimint://`";
        };
        address = mkOption {
          type = types.nullOr types.str;
          default = null;
          example = "wss://api.myfedimint.com";
          description = lib.mdDoc "Public URL of the API address of the reverse proxy/tls terminator. Usually starting with `wss://`.";
        };
      };
      bitcoin = {
        network = mkOption {
          type = types.str;
          default = "signet";
          example = "bitcoin";
          description = lib.mdDoc "Bitcoin network to participate in.";
        };
        rpc = {
          address = mkOption {
            type = types.str;
            default = "http://[::1]:38332";
            example = "signet";
            description = lib.mdDoc "Bitcoin node (bitcoind/electrum/esplora) address to connect to";
          };

          kind = mkOption {
            type = types.str;
            default = "bitcoind";
            example = "electrum";
            description = lib.mdDoc "Kind of a bitcoin node.";
          };

          secretFile = mkOption {
            type = types.nullOr types.str;
            default = null;
            description = lib.mdDoc ''
              If set the URL specified in `bitcoin.rpc.address` will get the content of this file added
              as an URL password, so `http://user@example.com` will turn into `http://user:SOMESECRET@example.com`.

              Example:

              `/etc/nix-bitcoin-secrets/bitcoin-rpcpassword-public` (for nix-bitcoin default)
            '';
          };
        };
      };

      consensus.finalityDelay = mkOption {
        type = types.number;
        default = 10;
        description = lib.mdDoc "Consensus peg-in finality delay.";
      };

      dataDir = mkOption {
        type = types.str;
        default = "/var/lib/fedimintd/";
        readOnly = true;
        description = lib.mdDoc ''
          Path to the data dir fedimintd will use to store its data.
          Note that due to using the DynamicUser feature of systemd, this value should not be changed
          and is set to be read only.
        '';
      };
    };
  };
in
{
  options = {
    services.fedimintd = mkOption {
      type = types.attrsOf (types.submodule fedimintdOpts);
      default = { };
      description = lib.mdDoc "Specification of one or more fedimintd instances.";
    };
  };

  config = mkIf (eachFedimintd != { }) {

    assertions = flatten
      (mapAttrsToList
        (fedimintdName: cfg: [
          {
            assertion = cfg.package != null;
            message = ''
              `services.fedimintd.${fedimintdName}.package` must be set manually until `fedimintd` is available in nixpkgs.
            '';
          }
          {
            assertion = cfg.p2p.address != null;
            message = ''
              `services.fedimintd.${fedimintdName}.p2p.address` must be set to address reachable by other peers.

              Example: `fedimint://p2p.mymint.org`.
            '';
          }
          {
            assertion = cfg.api.address != null;
            message = ''
              `services.fedimintd.${fedimintdName}.api.address` must be set to address reachable by the clients, with TLS terminated by external service (typically nginx), and relayed to the fedimintd bind address.

              Example: `wss://api.mymint.org`.
            '';
          }
        ])
        eachFedimintd);

    networking.firewall.allowedTCPPorts = flatten
      (mapAttrsToList
        (fedimintdName: cfg:
          (
            if cfg.api.openFirewall then [
              cfg.api.port
            ] else [ ]
          ) ++ (
            if cfg.p2p.openFirewall then [
              cfg.p2p.port
            ] else [ ]
          )
        )
        eachFedimintd);


    systemd.services =
      mapAttrs'
        (fedimintdName: cfg: (
          nameValuePair "fedimintd-${fedimintdName}" (
            let
              startScript = pkgs.writeShellScript "fedimintd-start" (
                (if cfg.bitcoin.rpc.secretFile != null then
                  ''
                    secret=$(${pkgs.coreutils}/bin/head -n 1 "${cfg.bitcoin.rpc.secretFile}")
                    prefix="''${FM_BITCOIN_RPC_URL%*@*}"  # Everything before the last '@'
                    suffix="''${FM_BITCOIN_RPC_URL##*@}"  # Everything after the last '@'
                    FM_BITCOIN_RPC_URL="''${prefix}:''${secret}@''${suffix}"
                  ''
                else
                  "") +
                ''
                  exec ${cfg.package}/bin/fedimintd
                ''
              );
            in
            {
              description = "Fedimint Server";
              documentation = [ "https://github.com/fedimint/fedimint/" ];
              wantedBy = [ "multi-user.target" ];
              environment = lib.mkMerge ([
                {
                  FM_BIND_P2P = "${cfg.p2p.bind}:${builtins.toString cfg.p2p.port}";
                  FM_BIND_API = "${cfg.api.bind}:${builtins.toString cfg.api.port}";
                  FM_P2P_URL = cfg.p2p.address;
                  FM_API_URL = cfg.api.address;
                  FM_DATA_DIR = cfg.dataDir;
                  FM_BITCOIN_NETWORK = cfg.bitcoin.network;
                  FM_BITCOIN_RPC_URL = cfg.bitcoin.rpc.address;
                  FM_BITCOIN_RPC_KIND = cfg.bitcoin.rpc.kind;
                }
                cfg.extraEnvironment
              ]);
              serviceConfig = {
                User = cfg.user;
                Group = cfg.group;

                Restart = "always";
                RestartSec = 10;
                StartLimitBurst = 5;
                UMask = "077";
                LimitNOFILE = "100000";

                LockPersonality = true;
                ProtectClock = true;
                ProtectControlGroups = true;
                ProtectHostname = true;
                ProtectKernelLogs = true;
                ProtectKernelModules = true;
                ProtectKernelTunables = true;
                PrivateMounts = true;
                RestrictAddressFamilies = [ "AF_INET" "AF_INET6" ];
                RestrictNamespaces = true;
                RestrictRealtime = true;
                SystemCallArchitectures = "native";
                SystemCallFilter = [
                  "@system-service"
                  "~@privileged"
                ];
                StateDirectory = "fedimintd";
                StateDirectoryMode = "0700";
                ExecStart = startScript;


                # Hardening measures
                PrivateTmp = "true";
                ProtectSystem = "full";
                NoNewPrivileges = "true";
                PrivateDevices = "true";
                MemoryDenyWriteExecute = "true";
              };
            }
          )
        ))
        eachFedimintd;


    users.users = mapAttrs'
      (fedimintdName: cfg: (
        nameValuePair "fedimintd-${fedimintdName}" {
          name = cfg.user;
          group = cfg.group;
          description = "Fedimint daemon user";
          home = cfg.dataDir;
          isSystemUser = true;
        }
      ))
      eachFedimintd;

    users.groups = mapAttrs'
      (fedimintdName: cfg: (
        nameValuePair "${cfg.group}" { }
      ))
      eachFedimintd;
  };
}
