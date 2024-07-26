searchState.loadedDescShard("fedimint_server", 0, "Fedimint toplevel config\nThe actual implementation of consensus\nImplementation of multiplexed peer connections\nNetworking for mint-to-mint and client-to-mint …\nUser has cancelled the DKG task\nTotal client config\nAll the parameters necessary for generating the …\nShared consensus-critical config\nConsensus broadcast settings that result in 3 minutes …\nThe default maximum open connections the API can handle\nConsensus broadcast settings that result in 10 seconds …\nCaptures an error occurring in DKG\nThings that a <code>distributed_gen</code> config can send between peers\nResult of running DKG\nContains the error value\nError running DKG\nThe federation id is a copy of the authentication …\nFederation-wide client config\n<code>serde_json::Value</code> that must contain <code>kind: String</code> field\nThe types of keys to run distributed key generation for\nLocal non-consensus, not security-sensitive settings\nContains the success value\nPrivate for this federation member data that are security …\nAll the serializable configuration for the fedimint server\nConfig for the server-side of a particular Federation …\nModule (server side) config, typed\nSecret API auth string\nAPI endpoints for each federation member\nNetwork addresses and names for all peer APIs\nGet decoders for <code>modules</code> and skip unsupported ones\nSigning session keys for each federation member Optional …\nPublic keys for the atomic broadcast to authenticate …\nInfluences the atomic broadcast ordering latency, should …\nNumber of rounds per session.\nSecret key for the atomic broadcast to sign messages\n0.4.0 and later uses a hash of broadcast public keys to …\nThe version of the binary code running\nContains all configuration that needs to be the same for …\nReturns the consensus hash for a given client config\nCore consensus version\nGet decoders for <code>modules</code> and fail if any is unsupported\nRuns the distributed key gen algorithm\nRandom dummy id for testing\nFederation name from config metadata (if set)\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new config from the results of a trusted or …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAssemble from the three functionally distinct parts\n(soft-deprecated): Get the first instance of a module of a …\nConstructs a module config by id\nConstructs a module config by name\nOur peer id (generally should not change)\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nContains all configuration that is locally configurable …\nHow many API connections we will accept\nGet the value of a given meta field\nAdditional config the federation wants to transmit to the …\nAdditional config the federation wants to transmit to the …\nSecret material from modules\nAll configuration that needs to be the same for modules\nNon-consensus, non-private configuration from modules\nThe peer’s name\nNetwork addresses and names for all p2p connections\nContains all configuration that will be encrypted such as …\nSee <code>DynRawFallback::redecode_raw</code>.\nApi versions supported by this server\nCerts for TLS communication, required for peer …\nSecret key for TLS communication, required for peer …\nTurn the typed config into type-erased version\nConverts a federation id to a public key to which we know …\nConverts a consensus-encoded client config struct to a …\nSplit the config into its three functionally distinct parts\nThe peer’s public URL (e.g. <code>wss://fedimint-server-1:5000</code>)\nAgreed on core consensus version\nWorkaround for a serde <code>flatten</code> quirk\nServes the config gen API endpoints\nOur local connection info\nConfig gen params that are only used locally, shouldn’t …\nAll the info we configure prior to config gen starting\nState held by the API after receiving a …\nCalled from <code>set_config_gen_connections</code> to add a peer’s …\nSecret API auth string\nBind address for API communication\nBind address for our API connection\nApi secret to use\nURL for our API connection\nOur auth string\nCode version str that will get encoded in consensus hash\nConfigs that have been generated\nReturns the peers that have called <code>add_config_gen_peer</code> on …\nTracks when the config is generated\nGets the consensus config gen params\nDB not really used\nReturns default config gen params that can be modified by …\nThe default params for the modules\nLimit on the number of times a config download token can …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nValidates and returns the params using our <code>request</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nURL of “leader” guardian to send our connection info to\nOur local connection\nHow many API connections we will accept\nHow many API connections we will accept\nOur peer id\nOur guardian name\nOur TLS private key\nBind address for P2P communication\nBind address for our P2P connection\nURL for our P2P connection\nConnection info received from other guardians, unique by …\nRegistry for config gen\nThe config gen params requested by the leader\nOnce configs are generated, updates status to …\nReturns the server status\nSets our connection info, possibly sending it to a leader\nSets and validates the config gen params\nOur config gen settings configured locally\nIn-memory state machine\nOur status\nTask group for running DKG\nOur TLS public cert\nOur TLS private key\nSends our updated peer info to the leader (if we have one)\nWe have verified all our peer configs\nReturns tagged hashes of consensus config to be shared …\nOur secret key share of a threshold key\nCreate another DKG with <code>threshold</code> signatures required\nExchanges a <code>DkgPeerMsg::PublicKey(key)</code> with all peers. …\nExchanges a <code>DkgPeerMsg::Module(Vec&lt;u8&gt;)</code> with all peers. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a second generator by hashing the first one to the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate multiple DKGs with the same <code>threshold</code> signatures …\nCreates the DKG and the first step of the algorithm\nCreate a single DKG with <code>threshold</code> signatures required\nRuns the DKG algorithms with our peers\nRuns the DKG algorithms for a given key and module id\nCreate keys from G1 (48B keys, 96B messages) used in …\nCreate keys from G2 (96B keys, 48B messages) used in <code>tbs</code>\nPeerIds are offset by 1, since evaluating a poly at 0 …\nRuns a single step of the DKG algorithm, processing a <code>msg</code> …\nClient configuration file\nClient connection string file\nTemporary directiry where server configs are stored / …\nServer consensus-only configurable file\nDatabase file name\nServer locally configurable file\nPlain-text stored password, used to restart the server …\nServer encrypted private keys file\nSalt backup for combining with the private key\nReads an encrypted json file into a struct\nWrites struct into an encrypted json file\nReads a plaintext json file into a struct\nWrites struct into a plaintext json file\nReads the server from the local, private, and consensus …\nWrites the server into configuration files (private keys …\nHow many txs can be stored in memory before blocking the …\nImplements the client API through which users interact …\nThe majority of these messages need to be delivered to the …\nThis enum defines the intended recipient of a Message.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nList API URL announcements from all peers we have received …\nOur server configuration\nCached client config\nDatabase for serving the API\nReturns the argument unchanged.\nUses the in-memory config to write a config backup tar …\nCalls <code>U::from(self)</code>.\nModules registered with the federation\nFor sending API events to consensus such as transactions\nAdd an API URL announcement from a peer to our database to …\nAn iterator over the variants of DbKeyPrefix\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA newtype for a nice <code>fmt::Debug</code> of a <code>ConsensusItem</code>\nA compact citem formatter, useful for debugging in case of …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRuns the main server consensus loop\nCreates a backup of the database in the checkpoint …\nReturns the full path where the database checkpoints are …\nDeletes the database checkpoint directory equal to …\nReturns the argument unchanged.\nReturns the number of sessions already saved in the …\nCreates the directory within the data directory for …\nCalls <code>U::from(self)</code>.\nJust a string version of peer ids for performance\nJust a string version of <code>cfg.local.identity</code> for performance\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nEnvironment variable for the session count determining …\nThe env var for maximum open connections the API can handle\nInitialize gauges or other metrics that need eager …\njsonrpsee/tower rpc layer that collects rpc stats\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAmount of per-peer messages after which we will stop …\nTODO: Use proper ModuleId after modularization is complete\nA <code>Msg</code> that can target a specific destination module\nA wrapper around <code>AnyPeerConnections</code> multiplexing …\nCallback queue from tasks that want to receive\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCached messages per <code>ModuleId</code> waiting for callback\nSender of peer bans\nTrack pending messages per peer to avoid a potential DoS\nAwait receipt of a message from any connected peer.\nSender of receive callbacks\nSender of send requests\nProvides an abstract network connection interface and …\nAdapter that implements a message based protocol on top of …\nImplements a connection manager for communication with …\nImplements a connection manager for communication with …\nHow long to wait before timing out client connections\nContains the error value\nA token proving the the API call was authenticated\nHas the context necessary for serving API endpoints\nContains the success value\nA state that has context for the API, passed to each rpc …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet “active” secret - one that should be used to call …\nGet all secrets\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet empty value - meaning no secrets to use\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a list of all peers and their respective API URLs …\nChecks if we already have a signed API endpoint …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOwned <code>Connector</code> trait object\nResult of a connection opening future\nOwned trait object type for incoming connection listeners\nAllows to connect to peers and to listen for incoming …\nContains the error value\nContains the success value\nShared <code>Connector</code> trait object\nTCP connector with encryption and authentication\nCopy of the certs from <code>peer_certs</code>, but in a format that …\nConnect to a <code>destination</code>\nSanitizes name as valid domain name\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTransform this concrete <code>Connector</code> into an owned trait …\nListen for incoming connections on <code>bind_addr</code>\nFake network stack used in tests\nParses the host and port from a url\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOwned <code>FramedTransport</code> trait object\nFramed transport codec for streams\nFramed codec that uses <code>bincode</code> to encode structs with <code>serde</code>…\nSink (sending) half of <code>BidiFramed</code>\nStream (receiving) half of <code>BidiFramed</code>\nA bidirectional framed transport adapter that can be split …\nSpecial case for tokio <code>TcpStream</code> based <code>BidiFramed</code> instances\nSplits the codec in its sending and receiving parts\nSplit the framed transport into read and write half\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTransforms concrete <code>FramedTransport</code> object into an owned …\nBuilds a new <code>BidiFramed</code> codec around a stream <code>stream</code>.\nSpecial constructor for tokio TCP connections.\nSpecial constructor for tokio TCP connections.\nWaits for the next item in a stream. If the stream is …\nWaits for the next item in a stream. If the stream is …\nCalculates delays for reconnecting to peers\nSpecifies the network configuration for …\nEvery how many seconds to send an empty message to our …\nProduction defaults will try to reconnect fast but then …\nOwned <code>Connector</code> trait object used by …\nInternal message type for <code>ReconnectPeerConnections</code>, just …\nConnection manager that automatically reconnects to peers\nFor tests we don’t want low min/floor delays because …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nOur federation member’s identity\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>ReconnectPeerConnections</code> connection manager …\nOur listen address for incoming connections from other …\nMap of all peers’ connection information we want to be …\nEvery how many seconds to send an empty message to our …\nOwned <code>Connector</code> trait object used by …\nInternal message type for <code>ReconnectPeerConnectionsReliable</code>…\nKeeps the references to a <code>PeerStatusChannelSender</code> for each …\nConnection manager that automatically reconnects to peers\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>ReconnectPeerConnections</code> connection manager …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")