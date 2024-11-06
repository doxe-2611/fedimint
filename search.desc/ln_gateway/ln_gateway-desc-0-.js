searchState.loadedDescShard("ln_gateway", 0, "Name of the gateway’s database that is used for metadata …\nThe default routing fees that the gateway charges for …\nThe non-lightning default module types that the Gateway …\nDefault Bitcoin network for testing purposes.\nThe default number of route hints that the legacy gateway …\nLNv2 CLTV Delta in blocks\nContains the error value\nContains the error value\nHow long a gateway announcement stays valid\nName of the folder that the gateway uses to store its node …\nContains the success value\nContains the success value\nThe action to take after handling a payment stream.\nVerifies that the supplied <code>network</code> matches the Bitcoin …\nVerifies that the supplied <code>network</code> matches the Bitcoin …\nBuilder struct that allows the gateway to build a Fedimint …\nFor the LNv2 protocol, this will create an invoice by …\nRetrieves a BOLT11 invoice from the connected Lightning …\nReads and serializes structures from the Gateway’s …\nThe gateway’s federation manager.\nForwards a lightning payment to the next hop like a normal …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe gateway’s current configuration\nDatabase for Gateway metadata.\nA public key representing the identity of the gateway. …\nThis function will return a <code>GatewayConfiguration</code> one of two\nChecks the Gateway’s current state and returns the proper\nRetrieves the persisted <code>CreateInvoicePayload</code> from the …\nReturns a Bitcoin deposit on-chain address for pegging in …\nHandles a request for the gateway to backup a connected …\nReturns the balance of the requested federation that the …\nInstructs the Gateway’s Lightning node to close all …\nHandles a connection request to join a new federation. The …\nCreates an invoice that is directly payable to the gateway…\nReturns the ecash, lightning, and onchain balances for the …\nIf the Gateway is connected to the Lightning node, returns …\nReturns information about the Gateway back to the client …\nGenerates an onchain address to fund the gateway’s …\nHandle a request to have the Gateway leave a federation. …\nHandles an intercepted lightning payment. If the payment …\nReturns a list of Lightning network channels from the …\nHandles an authenticated request for the gateway’s …\nInstructs the Gateway’s Lightning node to open a channel …\nRequests the gateway to pay an outgoing LN invoice using …\nRequests the gateway to pay an outgoing LN invoice on …\nHandles a request to receive ecash into the gateway.\nHandle a request to change a connected federation’s …\nInstructs the gateway to shutdown, but only after all …\nReturns a Bitcoin TXID from a peg-out transaction for a …\nWithdraws funds from the gateway’s lightning node …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nHelper function for determining if the gateway supports …\nHelper function for determining if the gateway supports …\nPolls the Gateway’s state waiting for it to shutdown so …\nBuilder struct that allows the gateway to build a …\nThe “module mode” of the gateway. Options are LNv1, …\nThe socket the gateway listens on.\nReads the connected federation client configs from the …\nReturns a <code>PublicKey</code> that uniquely identifies the Gateway.\nLoads a mnemonic from the database or generates a new one …\nHelper function for creating a gateway from either …\nCreates a new gateway but with a custom module registry …\nDefault function for creating a gateway with the <code>Mint</code>, …\nRetrieves the <code>PublicKey</code> of the Gateway module for a given …\nLegacy mechanism for registering the Gateway with …\nRegisters the gateway with each specified federation.\nHandles a stream of incoming payments from the lightning …\nReturns payment information that LNv2 clients can use to …\nMain entrypoint into the gateway that starts the client …\nRetrieves a <code>ClientHandleArc</code> from the Gateway’s in memory …\nInstructs this gateway to pay a Lightning network invoice …\nHelper function for atomically changing the Gateway’s …\nBegins the task for listening for intercepted payments …\nThe current state of the Gateway.\nTries to handle a lightning payment using the legacy …\nTries to handle a lightning payment using the LNv2 …\nMap <code>gateway_lnrpc</code> protobuf types to rust types\nIterates through all of the federations the gateway is …\nThe Gateway’s API URL.\nBuilds a new client with the provided <code>FederationConfig</code> and …\nReads a plain root secret from a database to construct a …\nConstructs the client builder with the modules, database, …\nDerives a per-federation secret according to Fedimint’s …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns a vector of “legacy” federations which did not …\nRecovers a client with the provided mnemonic. This …\nVerifies that the saved <code>ClientConfig</code> contains the expected …\nCommand line parameters for starting the gateway. <code>mode</code>, …\n<code>GatewayParameters</code> is a helper struct that can be derived …\nPublic URL from which the webserver API is reachable\nPath to folder containing gateway config and data files\nConfigured gateway routing fees Format: &lt;base_msat&gt;,&lt;…\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe Lightning module to use: LNv1, LNv2, or both\nGateway webserver listen address\nBitcoin network this gateway will be running on\nNumber of route hints to return in invoices\nGateway webserver authentication password\nConverts the command line parameters into a helper struct …\nAn iterator over the variants of DbKeyPrefix\nReads and serializes structures from the gateway’s …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe amount of the incoming contract, in msats.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the keypair that uniquely identifies the gateway.\nReturns the keypair that uniquely identifies the gateway.\nReturns the keypair that uniquely identifies the gateway, …\nSaves a registered incoming contract, returning the …\nEnvironment variable that specifies the address that the …\nEnvironment variable that instructs the gateway to run in …\nEnvironment variable that specifies the default routing …\nEnvironment variable that specifies the URL that clients …\nEnvironment variable that specifies the directory of the …\nEnvironment variable that specifies the URL that the …\nEnvironment variable that specifies the “module mode” …\nEnvironment variable that specifies the address the gateway…\nEnvironment variable that specifies the mnemonic that the …\nEnvironment variable that specifies that Bitcoin network …\nEnvironment variable that specifies the password. This is …\nEnvironment variable that specifies the URL of an Esplora …\nEnvironment variable that specifies the Bitcoin network …\nEnvironment variable that specifies the location of LND’…\nEnvironment variable that specifies the URL to connect to …\nEnvironment variable that specifies the location of LND’…\nEnvironment variable that instructs the gateway how many …\nEnvironment variable the specifies the port that the LDK …\nErrors that authenticated endpoints can encounter. Full …\nPublic error that indicates the requested federation is …\nErrors that can occur during the LNv1 protocol. LNv1 …\nErrors that can occur during the LNv2 protocol. LNv2 …\nErrors that unauthenticated endpoints can encounter. For …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe first index that the gateway will assign to a …\nMap of <code>FederationId</code> -&gt; <code>Client</code>. Used for efficient …\nReturns the argument unchanged.\nMap of federation indices to <code>FederationId</code>. Use for …\nCalls <code>U::from(self)</code>.\nTracker for federation index assignments. When connecting …\nIterates through all of the federations the gateway is …\nWaits for ongoing incoming LNv1 and LNv2 payments to …\nFor the given <code>OperationId</code>, this function will wait until …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nState machine that completes the incoming payment by …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA trait that the gateway uses to interact with a lightning …\nRepresents an active connection to the lightning node.\nCloses all channels with a peer lightning node.\nCompletes an HTLC that was intercepted by the gateway. …\nRequests the lightning node to create an invoice. The …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a summary of the lightning node’s balance, …\nGets a funding address belonging to the lightning node’s …\nReturns high-level info about the lightning node.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLists the lightning node’s active channels with all …\nOpens a channel with a peer lightning node.\nRetrieves the basic information about the Gateway’s …\nRetrieve route hints from the Lightning node, capped at …\nAttempts to pay an invoice using the lightning node, …\nAttempts to pay an invoice using the lightning node, …\nConsumes the current client and returns a stream of …\nReturns route hints to the lightning node.\nReturns true if the lightning backend supports payments …\nWaits for the Lightning node to be synced to the Bitcoin …\nExecutes an onchain transaction using the lightning node’…\nLDK esplora server URL\nLDK lightning server port\nLND macaroon file path\nLND RPC address\nLND TLS cert file path\nLDK network (defaults to regtest if not provided)\nAn <code>ILnRpcClient</code> that wraps around <code>GatewayLightningClient</code> …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe client for querying data about the blockchain.\nReturns the argument unchanged.\nThe HTLC stream, until it is taken by calling …\nCalls <code>U::from(self)</code>.\nCreates a new <code>GatewayLdkClient</code> instance and starts the …\nThe underlying lightning node.\nConverts a transaction outpoint to a short channel ID by …\nUtility struct for logging payment hashes. Useful for …\nLND client\nCancels a HOLD invoice that is specified by the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSettles a HOLD invoice that is specified by the …\nSpawns background tasks for monitoring the status of …\nSpawns a new background task that intercepts HTLCs from …\nSpawns a new background task that subscribes to updates of …\nSpawns a new background task that subscribes to “add” …\nReturns true if the lightning backend supports payments …\nInformation about one of the feds we are connected to\nIf the exact amount cannot be represented, return e-cash …\nThe amount of e-cash to spend\nDefault timeout for e-cash redemption of one week in …\nMapping from short channel id to the federation id that it …\nFederation id of the e-cash to spend\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIf the necessary information to join the federation the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAfter how many seconds we will try to reclaim the e-cash …\nContains the error value\nContains the success value\nBase URL to gateway web server This should include an …\nA request client\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOptional gateway password\nGenerate deposit address\nMiddleware to authenticate an incoming request. Routes …\nMiddleware to authenticate an incoming request. Routes …\nValidate that the Bearer token matches the gateway’s …\nBackup a gateway actor state\nDisplay gateway ecash note balance\nDisplay high-level information about the Gateway config\nConnect a new federation\nExtracts the Bearer token from the Authorization header of …\nDisplay high-level information about the Gateway\nCreates a password hash by appending a 4 byte salt to the …\nDisplay high-level information about the Gateway\nLeave a federation\nPublic routes that are used in the LNv1 protocol\nPublic routes that are used in the LNv2 protocol\nCreates the webserver’s routes and spawns the webserver …\nGateway Webserver Routes. The gateway supports three types …\nWithdraw from a gateway federation.\nClient side Lightning module <strong>for the gateway</strong>.\nThe high-level state of a reissue operation started with …\nThe high-level state of an intercepted HTLC operation …\nFor the given <code>OperationId</code>, this function will wait until …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAttempt buying preimage from this federation in order to …\nAttempt fulfill HTLC by buying preimage from the federation\nPay lightning invoice on behalf of federation user\nSubscribe to updates when the gateway is handling an …\nThe index of the incoming htlc in the incoming channel\nThe incoming HTLC amount in millisatoshi.\nThe id of the incoming channel\nThe incoming HTLC expiry\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe outgoing HTLC amount in millisatoshi\nThe HTLC payment hash.\nAttempts to remove a gateway’s registration from the …\nRetrieves the signing challenge from each federation peer. …\nThe short channel id of the HTLC.\nRegister gateway with federation\nState machine that completes the incoming payment by …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nState machine that executes the Lightning payment on …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nVerifies that the supplied <code>preimage_auth</code> is the same as the\nUtility struct for formatting an intercepted HTLC. Useful …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")