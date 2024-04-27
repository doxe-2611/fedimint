searchState.loadedDescShard("ln_gateway", 0, "Contains the error value\nHow long a gateway announcement stays valid\n<code>GatewayParameters</code> is a helper struct that can be derived …\nThis initial SCID is considered invalid by LND HTLC …\nRepresents an active connection to the lightning node.\nContains the success value\nPublic URL from which the webserver API is reachable\nJoining or leaving Federation is protected by this lock to …\nPath to folder containing gateway config and data files\nConfigured gateway routing fees Format: &lt;base_msat&gt;,&lt;…\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThis function will return a <code>GatewayConfiguration</code> one of two\nChecks the Gateway’s current state and returns the proper\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIterates through all of the federations the gateway is …\nGateway webserver listen address\nBitcoin network this gateway will be running on\nNumber of route hints to return in invoices\nGateway webserver authentication password\nRegisters the gateway with each specified federation.\nMap <code>gateway_lnrpc</code> protobuf types to rust types\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAn iterator over the variants of DbKeyPrefix\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn address belonging to the lightning node’s on-chain …\nThe alias of the lightning node\nThe best block height that the associated lightning node …\nThe capacity of the channel, in sats.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerated client implementations.\nGenerated server implementations.\nNested message and enum types in <code>GetRouteHintsResponse</code>.\nThe host address of the node we’re connecting to.\nThe index of the incoming htlc in the incoming channel\nThe index of the incoming htlc in the incoming channel\nThe incoming HTLC amount in millisatoshi. This amount …\nThe id of the incoming channel\nThe id of the incoming channel\nThe incoming HTLC expiry Determines block height when the …\nNested message and enum types in <code>InterceptHtlcResponse</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBolt11 invoice\nThe maximum delay, in blocks, that the payment route can …\nThe maximum fee, in millisats, that will be paid as a …\nThe network the node is on. Valid values are “main” | …\nThe outgoing HTLC amount in millisatoshi This is the …\nThe hash of the payment\nThe HTLC payment hash. Value is not guaranteed to be …\nThe preimage of the invoice\nThe public key of the associated lightning node\nThe public key of the node we’re connecting to.\nThe public key of the node we’re opening a channel to.\nThe amount of sats that should be pushed to the …\nThe route hints to the associated lightning node\nThe short channel id of the HTLC. Use this value to …\nWhether the associated lightning node is fully synced up …\nGatewayLightning is a service that provides limited access …\nEnable decompressing responses.\nAttempt to create a new client by connecting to a given …\nConnect the underlying lightning node to another node.\nReturns the argument unchanged.\nGet a Bitcoin address that belongs to the underlying …\nGetNodeInfo returns the public key and alias of the …\nGetRouteHints returns the route hints to the associated …\nCalls <code>U::from(self)</code>.\nLimits the maximum size of a decoded message.\nLimits the maximum size of an encoded message.\nOpen a channel on the underlying lightning node.\nPayInvoice attempts to pay an invoice using the associated …\nRouteHtlcs opens a bi-directional stream for the client to …\nCompress requests with the given encoding.\nGenerated trait containing gRPC methods that should be …\nGatewayLightning is a service that provides limited access …\nServer streaming response type for the RouteHtlcs method.\nEnable decompressing requests with the given encoding.\nConnect the underlying lightning node to another node.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a Bitcoin address that belongs to the underlying …\nGetNodeInfo returns the public key and alias of the …\nGetRouteHints returns the route hints to the associated …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLimits the maximum size of a decoded message.\nLimits the maximum size of an encoded message.\nOpen a channel on the underlying lightning node.\nPayInvoice attempts to pay an invoice using the associated …\nRouteHtlcs opens a bi-directional stream for the client to …\nCompress responses with the given encoding, if the client …\nFlat routing fee in millisatoshis.\nThe difference in CLTV values between this node and the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nHops that make up a route hint to the associated lightning …\nReturns the value of <code>htlc_maximum_msat</code>, or the default …\nThe maximum value in msat available for routing with a …\nReturns the value of <code>htlc_minimum_msat</code>, or the default …\nThe minimum value, in msat, which must be relayed to the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLiquidity-based routing fee in millionths of a routed …\nThe short_channel_id of this channel.\nThe node_id of the non-target end of the route.\nRequest to complete an intercepted HTLC with failure …\nRequest to just forward the HTLC without failing or …\nRequest to complete an intercepted HTLC with success …\nEncodes the message to a buffer.\nReturns the encoded length of the message without a length …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDecodes an instance of the message from a buffer, and …\nThe preimage for settling an intercepted HTLC\nThe reason for the cancellation of an intercepted HTLC\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nState machine that completes the incoming payment by …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA trait that the gateway uses to interact with a lightning …\nComplete an HTLC that was intercepted by the gateway. Must …\nConnect to a peer lightning node from the gateway’s …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a funding address belonging to the gateway’s …\nGet the public key and alias of the lightning node\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOpen a channel with a peer lightning node from the gateway…\nAttempt to pay an invoice using the lightning node\nAttempt to pay an invoice using the lightning node using a …\nConsumes the current client and returns a stream of …\nGet route hints to the lightning node\nReturns true if the lightning backend supports payments …\nLND macaroon file path\nLND RPC address\nLND TLS cert file path\nContains the error value\nAn <code>ILnRpcClient</code> that wraps around <code>GatewayLightningClient</code> …\nContains the success value\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nLND client\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns true if the lightning backend supports payments …\nInformation about one of the feds we are connected to\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nContains the error value\nContains the success value\nBase URL to gateway web server This should include an …\nA request client\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOptional gateway password\nGenerate deposit address\nMiddleware to authenticate an incoming request. Routes …\nMiddleware to authenticate an incoming request. Routes …\nValidate that the Bearer token matches the gateway’s …\nBackup a gateway actor state\nDisplay gateway ecash note balance\nDisplay high-level information about the Gateway config\nConnect a new federation\nExtracts the Bearer token from the Authorization header of …\nDisplay high-level information about the Gateway\nCreates a password hash by appending a 4 byte salt to the …\nDisplay high-level information about the Gateway\nLeave a federation\nCreates the webserver’s routes and spawns the webserver …\nGateway Webserver Routes. The gateway supports three types …\nWithdraw from a gateway federation.\nClient side Lightning module <strong>for the gateway</strong>.\nThe high-level state of a reissue operation started with …\nThe high-level state of an intercepted HTLC operation …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAttempt buying preimage from this federation in order to …\nAttempt fulfill HTLC by buying preimage from the federation\nPay lightning invoice on behalf of federation user\nSubscribe to updates when the gateway is handling an …\nThe index of the incoming htlc in the incoming channel\nThe incoming HTLC amount in millisatoshi.\nThe id of the incoming channel\nThe incoming HTLC expiry\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe outgoing HTLC amount in millisatoshi\nThe HTLC payment hash.\nRegister gateway with federation\nAttempts to remove a gateway’s registration from the …\nRetrieves the signing challenge from each federation peer. …\nThe short channel id of the HTLC.\nState machine that completes the incoming payment by …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nState machine that executes the Lightning payment on …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nVerifies that the supplied <code>preimage_auth</code> is the same as the")