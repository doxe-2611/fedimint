searchState.loadedDescShard("fedimint_cli", 0, "Send direct method call to the API. If you specify –…\nShow an audit across all modules\nCli error\nExtension trait to make turning <code>Option</code>s into <code>CliError</code>/…\nType of output the cli produces\n<code>Result</code> with <code>CliError</code> as <code>Error</code> and <code>CliOutput</code> as <code>Ok</code>\n<code>Result</code> with <code>CliError</code> as <code>Error</code>\nExtension trait making turning Results/Errors into <code>CliError</code>…\nDecode invite code or ecash notes string into a JSON …\nEncode an invite code or ecash notes into binary\nContains the error value\nContains the error value\nDownload guardian config to back it up\nConfig enabling client to establish websocket connection …\nDecode an invite code string into a JSON representation\nEncode connection info from its constituent parts\nJoin a federation using it’s InviteCode\nLists active and inactive state machine states of the …\nDecode a string of ecash notes into a JSON representation\nEncode a JSON string of notes to an ecash string\nContains the success value\nContains the success value\nGets the current fedimint AlephBFT block count\nStop fedimintd after the specified session to do a …\nSign and announce a new API endpoint. The previous one …\nShow the status according to the <code>status</code> endpoint\nDecode a transaction hex string and print it to stdout\nPrint the latest Git commit hash this bin. was built with.\nJust start the <code>Client</code> and wait\nWait for the fed to reach a consensus block count\nWait for all state machines to complete\nAllow to access the <code>status</code> endpoint in a pre-dkg phase\nThe working directory of the client containing the config …\nGet and create if doesn’t exist the data dir\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMap error into <code>CliError</code> wrapping the original error message\nMap error into <code>CliError</code> using custom error message <code>msg</code>\nConvert clap arguments to backup metadata\nBuild a new <code>fedimintd</code> with a custom version hash\nPeer id of the guardian\nGuardian password for authentication\nActivate more verbose logging, for full control use the …\nNew API URL to announce\nProvide the API url for the guardian directly in case the …\nSession index to stop after\nEncrypted config file\nPlaintext config file\nJSON-RPC method to call\nPlaintext config file output\nEncrypted config file output\nJSON-RPC parameters for the request\nThe password that encrypts the configs\nThe password that encrypts the configs\nGuardian password in case authenticated API endpoints are …\nWhich server to send request to\nEncryption salt file, otherwise defaults to the salt file …\nEncryption salt file, otherwise defaults to the salt file …\nLimit the wait time\nURL of “leader” guardian to send our connection info to\nGuardian-defined key-value pairs that will be passed to …\nSet the params (if leader) or just the local params (if …\nOur guardian name\nWait for deposit on previously generated address\nWait for incoming invoice to be paid\nWait for a lightning payment to complete\nUpload the (encrypted) snapshot of mint notes to federation\nCombines two or more serialized e-cash notes strings\nReturns the client config\nGenerate a new deposit address, funds sent to it can later …\nDiscover the common api version to use to communicate with …\nDisplay wallet info (holdings, tiers)\nList registered gateways\nCreate a lightning invoice to receive payment via gateway\nPay a lightning invoice or lnurl via a gateway\nCall a module subcommand\nPrint the secret key of the client\nReissue notes received from a third party to avoid double …\nJoin federation and restore modules that support it\nPrepare notes to send to a third party as a payment\nSplits a string containing multiple e-cash notes (e.g. …\nVerifies the signatures of e-cash notes, but <em>not</em> if they …\nWithdraw funds from the federation\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf the exact amount cannot be represented, return e-cash …\nThe amount of e-cash to spend\nAmount to pay, used for lnurl\nWill return immediately after funding the payment\nInvoice comment/description, used on lnurl\nBackup metadata, encoded as <code>key=value</code> (use …\nModule selector (either module id or module kind)\nDon’t fetch the registered gateways from the federation\nLightning invoice or lnurl\nAfter how many seconds we will try to reclaim the e-cash …\nLocked version of database\nBuilder for <code>Locked</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a <code>Self</code> by acquiring a lock file\nCreate <code>Locked</code> by giving it the database to wrap")