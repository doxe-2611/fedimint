searchState.loadedDescShard("fedimint_api_client", 0, "Client query system\nSet of api versions for each component (core + modules)\nJSON-RPC error which can occur when a JSON-RPC call fails.\nSome condition on the response this not match\nCould not connect\nCustom error.\nEmpty batch request.\nContains the error value\nContains the error value\nContains the error value\nContains the error value\nAn extension trait allowing to making federation-wide API …\nAn API request error when calling an entire federation\nThe status of a server, including how it views its peers\n<code>IGlobalFederationApi</code> wrapping some <code>T: IRawFederationApi</code> …\nConvenience extension trait used for wrapping …\nArchive of all the guardian config files that can be used …\nNot implemented for HTTP clients.\nAllows to connect to peers. Connections are request based …\nThe API for the global (non-module) endpoints\nTrait marker for the module (non-global) endpoints\nAn API (module or global) that can query a federation\nAn internal client error\nThe endpoint specification for the peer is invalid (e.g. …\nThe request was addressed to an invalid <code>peer_id</code>\nSomething about the request we’ve sent was wrong, should …\nInvalid request ID.\nSomething about the response was wrong, should not …\nThe rpc id (e.g. jsonrpc method name) was not recognized …\nInvalid subscription ID.\nError type.\nContains the success value\nContains the success value\nContains the success value\nContains the success value\nFailed to parse the data.\nAn API request error when calling a single federation peer\nThe error returned when registering a method or …\nRequest timeout\nThe response payload was returned successfully but failed …\nThe background task has been terminated.\nServer returned an internal error, suggesting something is …\nUnderlying transport failed, in some typical way\nNetworking error or error on the low-level protocol layer.\nDuring config gen, used for an API-to-API call that adds a …\nList of all federation peers for the purpose of iterating …\nShow an audit across all modules\nCheck auth credentials\nSmall LRU used as <code>IGlobalFederationApi::await_block</code> cache.\nReturns the consensus config gen params, followers will …\nReturns the fedimintd version a peer is running\nIndicates that this peer needs attention from the operator …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nDuring config gen, gets all the server connections we’ve …\nGets the default config gen params which can be configured …\nLike <code>Self::await_session_lru</code>, but for …\nAfter DKG, returns the hash of the consensus config …\nDownload the guardian config to back it up\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis should always be 0 if everything is okay, so a …\nMake request to a specific federation peer by <code>peer_id</code>\nMake an aggregate request to federation, using <code>strategy</code> to …\nRuns DKG, can only be called once after configs have been …\nPeerId of the Guardian node, if set\nFetches the server consensus hash if enough peers agree on …\nDuring config gen, sets the server connection containing …\nLeader sets the consensus params, everyone sets the local …\nSets the password used to decrypt the configs and …\nReads the configs from the disk, starts the consensus …\nReturns the status of the server\nPublish our signed API announcement to other guardians\nUpdates local state and notify leader that we have …\nSome condition on the response this not match\nCould not connect\nAn API request error when calling an entire federation\nAn internal client error\nThe endpoint specification for the peer is invalid (e.g. …\nThe request was addressed to an invalid <code>peer_id</code>\nSomething about the request we’ve sent was wrong, should …\nSomething about the response was wrong, should not …\nThe rpc id (e.g. jsonrpc method name) was not recognized …\nAn API request error when calling a single federation peer\nThe response payload was returned successfully but failed …\nServer returned an internal error, suggesting something is …\nUnderlying transport failed, in some typical way\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the general error if any.\nGet errors from different peers.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWas the transaction rejected (which is final)\nReport errors that are worth reporting\nReport any errors\n<code>IGlobalFederationApi</code> wrapping some <code>T: IRawFederationApi</code> …\nConvenience extension trait used for wrapping …\nSmall LRU used as <code>IGlobalFederationApi::await_block</code> cache.\nReturns the argument unchanged.\nLike <code>Self::await_session_lru</code>, but for …\nCalls <code>U::from(self)</code>.\nMake request to a specific federation peer by <code>peer_id</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTries to download the <code>ClientConfig</code> from the federation …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nTries to download the <code>ClientConfig</code> only once.\nDo nothing yet, keep waiting for requests\nA non-retryable failure has occurred\nReturns when we obtain the first valid responses. RPC call …\nReturns when we obtain a threshold of valid responses. RPC …\nResults from the strategy handling a response from a peer\nFedimint query strategy\nRetry requests to this peers\nReturn the successful result\nReturns when we obtain a threshold of identical responses. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")