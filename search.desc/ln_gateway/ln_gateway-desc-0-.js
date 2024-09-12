searchState.loadedDescShard("ln_gateway", 0, "Name of the gateway’s database that is used for metadata …\nThe default routing fees that the gateway charges for …\nThe non-lightning default module types that the Gateway …\nDefault Bitcoin network for testing purposes.\nThe default number of route hints that the legacy gateway …\nLNv2 CLTV Delta in blocks\nContains the error value\nHow long a gateway announcement stays valid\nErrors that can occur while processing incoming HTLC’s, …\n<code>GatewayParameters</code> is a helper struct that can be derived …\nName of the folder that the gateway uses to store its node …\nContains the success value\nThe action to take after handling a payment stream.\nVerifies that the supplied <code>network</code> matches the Bitcoin …\nBuilder struct that allows the gateway to build a Fedimint …\nFor the LNv2 protocol, this will create an invoice by …\nRetrieves a BOLT11 invoice from the connected Lightning …\nReads and serializes structures from the Gateway’s …\nThe gateway’s federation manager.\nForwards an HTLC to the next hop like a normal lightning …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe gateway’s current configuration\nDatabase for Gateway metadata.\nA public key representing the identity of the gateway. …\nThis function will return a <code>GatewayConfiguration</code> one of two\nChecks the Gateway’s current state and returns the proper\nRetrieves the persisted <code>CreateInvoicePayload</code> from the …\nReturns a Bitcoin deposit on-chain address for pegging in …\nHandles a request for the gateway to backup a connected …\nReturns the balance of the requested federation that the …\nInstructs the Gateway’s Lightning node to close all …\nHandles a connection request to join a new federation. The …\nCreates an invoice that is directly payable to the gateway…\nReturns the ecash, lightning, and onchain balances for the …\nIf the Gateway is connected to the Lightning node, returns …\nReturns information about the Gateway back to the client …\nGenerates an onchain address to fund the gateway’s …\nHandles an intercepted HTLC. If the HTLC is part of an …\nHandle a request to have the Gateway leave a federation. …\nReturns a list of Lightning network channels from the …\nHandles an authenticated request for the gateway’s …\nInstructs the Gateway’s Lightning node to open a channel …\nRequests the gateway to pay an outgoing LN invoice on …\nRequests the gateway to pay an outgoing LN invoice using …\nHandles a request to receive ecash into the gateway.\nHandle a request to change a connected federation’s …\nReturns a Bitcoin TXID from a peg-out transaction for a …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBuilder struct that allows the gateway to build a …\nThe socket the gateway listens on.\nReads the connected federation client configs from the …\nReturns a <code>PublicKey</code> that uniquely identifies the Gateway.\nLoads a mnemonic from the database or generates a new one …\nHelper function for creating a gateway from either …\nCreates a new gateway but with a custom module registry …\nDefault function for creating a gateway with the <code>Mint</code>, …\nRetrieves the <code>PublicKey</code> of the Gateway module for a given …\nLegacy mechanism for registering the Gateway with …\nRegisters the gateway with each specified federation.\nHandles an incoming payment stream from the lightning node …\nReturns payment information that LNv2 clients can use to …\nMain entrypoint into the gateway that starts the client …\nRetrieves a <code>ClientHandleArc</code> from the Gateway’s in memory …\nInstructs this gateway to pay a Lightning network invoice …\nHelper function for atomically changing the Gateway’s …\nBegins the task for listening for intercepted HTLCs from …\nThe current state of the Gateway.\nTries to handle an HTLC using the legacy lightning …\nTries to handle an HTLC using the LNv2 protocol. Returns <code>Ok</code>…\nMap <code>gateway_lnrpc</code> protobuf types to rust types\nIterates through all of the federations the gateway is …\nThe Gateway’s API URL.\nBuilds a new client with the provided <code>FederationConfig</code> and …\nReads a plain root secret from a database to construct a …\nConstructs the client builder with the modules, database, …\nDerives a per-federation secret according to Fedimint’s …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns a vector of “legacy” federations which did not …\nRecovers a client with the provided mnemonic. This …\nVerifies that the saved <code>ClientConfig</code> contains the expected …\nCommand line parameters for starting the gateway. <code>mode</code>, …\n<code>GatewayParameters</code> is a helper struct that can be derived …\nPublic URL from which the webserver API is reachable\nPath to folder containing gateway config and data files\nConfigured gateway routing fees Format: &lt;base_msat&gt;,&lt;…\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGateway webserver listen address\nBitcoin network this gateway will be running on\nNumber of route hints to return in invoices\nGateway webserver authentication password\nConverts the command line parameters into a helper struct …\nAn iterator over the variants of DbKeyPrefix\nReads and serializes structures from the gateway’s …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe amount of the incoming contract, in msats. TODO: …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the keypair that uniquely identifies the gateway.\nReturns the keypair that uniquely identifies the gateway.\nReturns the keypair that uniquely identifies the gateway, …\nSaves a registered incoming contract, returning the …\nThe first index that the gateway will assign to a …\nMap of <code>FederationId</code> -&gt; <code>Client</code>. Used for efficient …\nReturns the argument unchanged.\nMap of federation indices to <code>FederationId</code>. Use for …\nCalls <code>U::from(self)</code>.\nTracker for federation index assignments. When connecting …\nIterates through all of the federations the gateway is …\nWaits for ongoing incoming LNv1 and LNv2 payments to …\nAn address belonging to the lightning node’s on-chain …\nThe alias of the lightning node\nThe amount in msats to be paid\nThe amount in millisatoshis of the invoice.\nThe best block height that the associated lightning node …\nThe capacity of the channel, in sats.\nAll channels on the node that are currently able to send …\nNested message and enum types in <code>CreateInvoiceRequest</code>.\nA description or a description hash must be provided.\nThe receiver’s public key\nThe features the the receiver supports\nThe time in seconds this invoice is valid for.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerated client implementations.\nGenerated server implementations.\nNested message and enum types in <code>GetRouteHintsResponse</code>.\nThe host address of the node we’re connecting to.\nThe index of the incoming htlc in the incoming channel\nThe index of the incoming htlc in the incoming channel\nThe incoming HTLC amount in millisatoshi. This amount …\nThe id of the incoming channel\nThe id of the incoming channel\nThe incoming HTLC expiry Determines block height when the …\nNested message and enum types in <code>InterceptHtlcResponse</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBolt11 invoice\nThe total balance of the node’s lightning wallet, in …\nNested message and enum types in <code>ListActiveChannelsResponse</code>…\nThe maximum delay, in blocks, that the payment route can …\nThe maximum delay, in blocks, that the payment route can …\nThe maximum fee, in millisats, that will be paid as a …\nThe maximum fee, in millisats, that will be paid as a …\nMinimum CLTV delta for this payment\nThe network the node is on. Valid values are “bitcoin” …\nThe number of channels that were closed.\nThe total balance of the node’s on-chain wallet, in sats.\nThe outgoing HTLC amount in millisatoshi This is the …\nThe hash of the payment\nThe hash of the preimage for this payment\nThe HTLC payment hash. HTLCs corresponding to the same …\nThe HTLC payment hash. HTLCs corresponding to the same …\nThe payment hash of the invoice being created.\nThe payment secret for this payment\nThe preimage of the invoice\nA BOLT11 invoice without a description\nThe public key of the associated lightning node TODO: …\nThe public key of the node we’re opening a channel to.\nThe public key of the node we’re closing channels with.\nThe amount of sats that should be pushed to the …\nThe route hints to the associated lightning node\nReturns the value of <code>short_channel_id</code>, or the default …\nThe short channel id of the HTLC. Use this value to …\nWhether the associated lightning node is fully synced up …\nA description or a description hash must be provided.\nEncodes the message to a buffer.\nReturns the encoded length of the message without a length …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nDecodes an instance of the message from a buffer, and …\nGatewayLightning is a service that provides limited access …\nEnable decompressing responses.\nClose all channels with a given peer on the underlying …\nAttempt to create a new client by connecting to a given …\nReturns the argument unchanged.\nGet a Bitcoin address that belongs to the underlying …\nGetNodeInfo returns the public key and alias of the …\nGetRouteHints returns the route hints to the associated …\nCalls <code>U::from(self)</code>.\nList all channels that are active and able to send and …\nLimits the maximum size of a decoded message.\nLimits the maximum size of an encoded message.\nOpen a channel on the underlying lightning node.\nPayInvoice attempts to pay an invoice using the associated …\nPayPrunedInvoice attempts to pay a pruned invoice, which …\nRouteHtlcs opens a bi-directional stream for the client to …\nCompress requests with the given encoding.\nGenerated trait containing gRPC methods that should be …\nGatewayLightning is a service that provides limited access …\nServer streaming response type for the RouteHtlcs method.\nGenerated gRPC service name\nEnable decompressing requests with the given encoding.\nClose all channels with a given peer on the underlying …\nReturns the argument unchanged.\nGet a Bitcoin address that belongs to the underlying …\nGetNodeInfo returns the public key and alias of the …\nGetRouteHints returns the route hints to the associated …\nCalls <code>U::from(self)</code>.\nList all channels that are active and able to send and …\nLimits the maximum size of a decoded message.\nLimits the maximum size of an encoded message.\nOpen a channel on the underlying lightning node.\nPayInvoice attempts to pay an invoice using the associated …\nPayPrunedInvoice attempts to pay a pruned invoice, which …\nRouteHtlcs opens a bi-directional stream for the client to …\nCompress responses with the given encoding, if the client …\nFlat routing fee in millisatoshis.\nThe difference in CLTV values between this node and the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nHops that make up a route hint to the associated lightning …\nReturns the value of <code>htlc_maximum_msat</code>, or the default …\nThe maximum value in msat available for routing with a …\nReturns the value of <code>htlc_minimum_msat</code>, or the default …\nThe minimum value, in msat, which must be relayed to the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLiquidity-based routing fee in millionths of a routed …\nThe short_channel_id of this channel.\nThe node_id of the non-target end of the route.\nRequest to complete an intercepted HTLC with failure …\nRequest to just forward the HTLC without failing or …\nRequest to complete an intercepted HTLC with success …\nEncodes the message to a buffer.\nReturns the encoded length of the message without a length …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDecodes an instance of the message from a buffer, and …\nThe preimage for settling an intercepted HTLC\nThe reason for the cancellation of an intercepted HTLC\nThe total capacity of the channel, in sats.\nReturns the argument unchanged.\nThe amount of sats that the local node can receive through …\nCalls <code>U::from(self)</code>.\nThe amount of sats that the local node can send through …\nThe pubkey of the lightning node that the channel is open …\nThe SCID of the channel.\nFor the given <code>OperationId</code>, this function will wait until …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nState machine that completes the incoming payment by …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nContains the error value\nA trait that the gateway uses to interact with a lightning …\nRepresents an active connection to the lightning node.\nContains the success value\nClose all channels with a peer lightning node from the …\nComplete an HTLC that was intercepted by the gateway. Must …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a funding address belonging to the gateway’s …\nGet the public key and alias of the lightning node\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOpen a channel with a peer lightning node from the gateway…\nRetrieves the basic information about the Gateway’s …\nRetrieve route hints from the Lightning node, capped at …\nAttempt to pay an invoice using the lightning node\nAttempt to pay an invoice using the lightning node using a …\nConsumes the current client and returns a stream of …\nGet route hints to the lightning node\nReturns true if the lightning backend supports payments …\nLDK esplora server URL\nLDK lightning server port\nLND macaroon file path\nLND RPC address\nLND TLS cert file path\nLDK network (defaults to regtest if not provided)\nAn <code>ILnRpcClient</code> that wraps around <code>GatewayLightningClient</code> …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe client for querying data about the blockchain.\nA handle to the task that processes incoming events from …\nReturns the argument unchanged.\nThe HTLC stream, until it is taken by calling …\nCalls <code>U::from(self)</code>.\nCreates a new <code>GatewayLdkClient</code> instance and starts the …\nThe underlying lightning node.\nConverts a transaction outpoint to a short channel ID by …\nUtility struct for logging payment hashes. Useful for …\nLND client\nCancels a HOLD invoice that is specified by the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSettles a HOLD invoice that is specified by the …\nSpawns background tasks for monitoring the status of …\nSpawns a new background task that intercepts HTLCs from …\nSpawns a new background task that subscribes to updates of …\nSpawns a new background task that subscribes to “add” …\nReturns true if the lightning backend supports payments …\nInformation about one of the feds we are connected to\nIf the exact amount cannot be represented, return e-cash …\nThe amount of e-cash to spend\nDefault timeout for e-cash redemption of one week in …\nMapping from short channel id to the federation id that it …\nFederation id of the e-cash to spend\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIf the necessary information to join the federation the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAfter how many seconds we will try to reclaim the e-cash …\nContains the error value\nContains the success value\nBase URL to gateway web server This should include an …\nA request client\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOptional gateway password\nGenerate deposit address\nMiddleware to authenticate an incoming request. Routes …\nMiddleware to authenticate an incoming request. Routes …\nValidate that the Bearer token matches the gateway’s …\nBackup a gateway actor state\nDisplay gateway ecash note balance\nDisplay high-level information about the Gateway config\nConnect a new federation\nExtracts the Bearer token from the Authorization header of …\nDisplay high-level information about the Gateway\nCreates a password hash by appending a 4 byte salt to the …\nDisplay high-level information about the Gateway\nLeave a federation\nCreates the webserver’s routes and spawns the webserver …\nGateway Webserver Routes. The gateway supports three types …\nWithdraw from a gateway federation.\nClient side Lightning module <strong>for the gateway</strong>.\nThe high-level state of a reissue operation started with …\nThe high-level state of an intercepted HTLC operation …\nFor the given <code>OperationId</code>, this function will wait until …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAttempt buying preimage from this federation in order to …\nAttempt fulfill HTLC by buying preimage from the federation\nPay lightning invoice on behalf of federation user\nSubscribe to updates when the gateway is handling an …\nThe index of the incoming htlc in the incoming channel\nThe incoming HTLC amount in millisatoshi.\nThe id of the incoming channel\nThe incoming HTLC expiry\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe outgoing HTLC amount in millisatoshi\nThe HTLC payment hash.\nRegister gateway with federation\nAttempts to remove a gateway’s registration from the …\nRetrieves the signing challenge from each federation peer. …\nThe short channel id of the HTLC.\nState machine that completes the incoming payment by …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nState machine that executes the Lightning payment on …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nVerifies that the supplied <code>preimage_auth</code> is the same as the\nUtility struct for formatting an intercepted HTLC. Useful …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")