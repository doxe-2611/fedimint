searchState.loadedDescShard("devimint", 0, "easy syntax to create a Command\nSpins up bitcoind, cln w/ gateway, lnd w/ gateway, a …\nSpins up bitcoind, cln, lnd, electrs, esplora, and opens a …\nRpc commands to the long running devimint instance. Could …\nRuns bitcoind, spins up FM_FED_SIZE worth of fedimints\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a link to the test dir under this path\nRun degraded federation with FM_OFFLINE_NODES shutdown\nDon’t set up new Federation, start from the state in …\nReturns the argument unchanged.\nReturns the argument unchanged.\nLike <code>Self::internal_client</code> but will check and wait for a …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMake <code>devimint</code> print stderr of called commands directly on …\nForce devimint to run a test with a deprecated …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the total number of blocks in the chain.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPoll until bitcoind rpc responds for basic commands\nWait until the server is able to respond to requests.\nClient that can has wallet initialized, can generate …\n<code>fedimint-cli</code> instance (basically path with client state: …\nBuilt in <code>Client</code>, already joined\nCreate a <code>Client</code> that starts with a fresh state.\nMines enough blocks to finalize mempool transactions, then …\nFork the built-in client of <code>Federation</code> and give it a name\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the current consensus session count\nBuilt-in, default, internal <code>Client</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRead the invite code from the client data dir\nClient to join a federation\nCreate a <code>Client</code> that starts with a state that is a copy of …\nNew <code>Client</code> that already joined <code>self</code>\nClient to join a federation\nOpen or create a <code>Client</code> that starts with a fresh state.\nCoordinated shutdown of all peers that restart using the …\nClient to join a federation with a restore procedure\nStarts all peers not currently running.\nTerminates all running peers.\nReturns once all active state machines complete\nReturns once the current session completes\nReturns once the provided session count completes\nDuplicate default fedimint module setup\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nOpen a channel with the gateway’s lightning node. …\nRestarts the gateway using the provided <code>bin_path</code>, which is …\n<code>devfed</code> then tests that spent ecash cannot be double spent\n<code>devfed</code> then tests a bunch of the fedimint-cli commands\n<code>devfed</code> then reboot gateway daemon for both CLN and LND. …\nRestore guardian from downloaded backup\n<code>devfed</code> then checks the average latency of reissuing ecash, …\n<code>devfed</code> then pegin CLN &amp; LND nodes and gateways. Kill the …\n<code>devfed</code> then calls binary <code>fedimint-load-test-tool</code>. See …\n<code>devfed</code> then kills and restarts most of the Guardian nodes …\n<code>devfed</code> then tests if the recovery tool is able to do a …\nClients reused for upgrade tests\nTest upgrade paths for a given binary\n<code>devfed</code> then spawns faucet for wasm tests\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nKills process when all references to ProcessHandle are …\nRun the command expecting an error, which is parsed using …\nReturns an Err if the command doesn’t return an error …\nReturns the json error if the command has a non-zero exit …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if running backwards-compatibility tests\nRun the command and get its output as json.\nRun the command and get its output as string.\nParses a version string returned from clap ex: fedimintd …\nRetry until <code>f</code> succeeds or default timeout is reached\nRetry until <code>f</code> succeeds or timeout is reached\nRun the command ignoring its output.\nRun the command logging the output and error\nLogs to $FM_LOGS_DIR/{name}.{out,err}\nMaps a version hash to a release version\nReturns the fedimintd version from clap or default min …\nReturns the gatewayd version from clap or default min …\nReturns the fedimint-cli version from clap or default min …\nReturns the gateway-cli version from clap or default min …\nReturns the gateway-cln-extension version from clap or …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")