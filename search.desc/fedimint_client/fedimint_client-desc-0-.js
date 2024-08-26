searchState.loadedDescShard("fedimint_client", 0, "Client library for fedimintd\nAdmin (guardian) identification and authentication\nMain client type\nUsed to configure, assemble and build <code>Client</code>\nUser handle to <code>Client</code>\nResources particular to a module instance\nInternal self-reference to <code>Client</code>\nLike <code>ClientStrong</code> but using a <code>Weak</code> handle to <code>Client</code>\nGlobal state and functionality provided to all state …\nContains the error value\nGlobal state given to a specific client module and state. …\nContains the success value\nList of core api versions supported by the implementation. …\nSee <code>Client::transaction_updates</code>\nAllows adding state machines from inside a transition to …\nAdds a state machine to the executor.\nReturns a reference to the client’s federation API …\nModule-specific API\nAuthentication details\nWaits for an output from the primary module to reach its …\nWaits for outputs from the primary module to reach its …\nWaits for the transaction to be accepted or rejected as …\nClient backup\nPrepare an encrypted backup and send it to federation for …\nNot sure why I couldn’t just directly call <code>Box::new</code> ins …\nBuild a <code>Client</code> and start the executor\nBuild a <code>Client</code> but do not start the executor\nInitialize a client builder that can be configured to …\nCreates a transaction that with an output of the primary …\nThis function is mostly meant for internal use, you are …\nUpdates about client recovery progress\nCreate a backup, include provided <code>metadata</code>\nDatabase keys used by the client\nModule-specific DB\nDownload most recent valid backup found from the Federation\nDownload most recent valid backup found from the Federation\nEnvironment variables\nRe-derive client’s <code>root_secret</code> using the federation ID. …\nAdd funding and/or change to the transaction builder as …\nAdds funding to a transaction or removes over-funding via …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a transaction with the supplied output and funding …\nThis function is mostly meant for internal use, you are …\nBackup id derived from the root secret key (public key …\nBalance available to the client for spending\nReturns the config of the client in JSON format.\nFetches the encoded client secret from the database and …\nStatic version of <code>Self::get_derived_backup_encryption_key</code> …\nStatic version of <code>Self::get_derived_backup_signing_key</code> for …\nReturns the instance id of the first module of the given …\nReturns a reference to a typed module client instance by …\nBlocks till the client has synced the guardian public key …\nGet the client <code>Metadata</code>\nReturns a reference to the module, panics if not found\nYou likely want to use <code>Client::get_peer_urls</code>. This …\nReturns a list of guardian API URLs\nInstance id of the module\nGet a reference to the module\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate an invite code with the api endpoint of the given …\nJoin a new Federation\nLoad the common api versions to use from cache and start a …\nManagement of meta fields\nGet the meta manager to read meta fields.\nModule client interface definitions\nReturned a reference client’s module API client, so that …\nCreate\nOperation log subsystem of the client\nGuardian’s own <code>peer_id</code>\nGet the primary module\nJoin a (possibly) previous joined Federation\nQuery the federation for API version support and then …\nRestart the client\nReturns the data from which the client’s root secret is …\nSecret handling &amp; derivation\nSet the client <code>Metadata</code>\nSet the client <code>Metadata</code>\nShutdown the client.\nClient state machine interfaces and executor implementation\nReturns a stream that yields the current client balance …\nSubscribe to recover progress for all the modules.\n<code>SupportedApiVersionsSummary</code> that the client and its …\nGet the <code>TaskGroup</code> that is tied to Client’s lifetime.\nStructs and interfaces to construct Fedimint transactions\nReturns the input amount and output amount of a transaction\nReturns a stream of transaction updates for the given …\nUpload <code>backup</code> to federation\nValidate backup before sending it to federation\nWait for all module recoveries to finish\nMake module generator available when reading the config\nReplace module generator registry entirely\nUses this module with the given instance id as the primary …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a list of all peers and their respective API URLs …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFetches API URL announcements from guardians, validates …\nClient state backup\nEncrypted version of <code>ClientBackup</code>.\nBackup metadata\n“32kiB is enough for any module backup” –dpc\nCreate empty metadata\nEncrypt with a key and turn into <code>EncryptedClientBackup</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate metadata as json from typed <code>val</code>\nAlign an ecoded message size up for better privacy\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs metadata empty\nApplication metadata\nModule specific-backup (if supported)\nSession count taken right before taking the backup used to …\nAttempt to deserialize metadata as typed json\nAttempt to deserialize metadata as untyped json (…\nValidate and fallback invalid parts of the backup\nKey used to lookup operation log entries in chronological …\nDoes the client modules need to run recovery before being …\nClient metadata that will be stored/restored on …\n<code>ClientMigrationFn</code> is a function that modules can implement …\nClient initialization was complete\nAn iterator over the variants of DbKeyPrefix\nPrefixes between 0xb1..=0xcf shall all be considered …\nPrefixes between 0xb1..=0xcf shall all be considered …\nShould only be used with freshly generated root secret\nClient initialization mode\nLike <code>InitMode</code>, but without no longer required data.\nThe state of the client initialization\n0xd0.. reserved for Fedimint internal use\nLast valid backup the client attempted to make\nHelper function definition for migrating a single state.\nPer-module instance data\nClient data initialization might still require some work …\nShould be used with root secrets provided by the user to …\nArbitrary data of the applications integrating Fedimint …\n<code>apply_migrations_client</code> iterates from the on disk database …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReads all active states from the database and returns …\nReads all inactive states from the database and returns …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMigrates a particular state by looping over all active and …\nPersists new active states by first removing all current …\nPersists new inactive states by first removing all current …\nMeta source can retry infinitely.\nMeta source should return fast, retry less. This blocks …\nLegacy non-meta module config source uses client config …\nService for managing the caching of meta fields.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the value for the meta field.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTries to parse <code>str_value</code> as JSON. In the special case that …\nNOTE: this subscription never ends even after update task …\nNOTE: this subscription never ends even after update task …\nUpdate all source in background.\nWait for next change in this source.\nWait until Meta Service is initialized, after this …\nData stored in regular backups so that restoring doesn’t …\nA Client context for a <code>ClientModule</code> <code>M</code>\nA reference back to itself that the module cacn get from …\nA context of a database transaction started with …\nFedimint module client\nCommon module types shared between client and server\nA final, fully initialized <code>crate::Client</code>\nType-erased version of <code>ClientModule</code>\nData and API clients available to state machine …\nAll possible states this client can submit to the executor\nWaits for the funds from an output created by …\nSee <code>crate::Client::await_primary_module_outputs</code>\nCreates all inputs and outputs necessary to balance the …\nSee <code>crate::Client::finalize_and_submit_transaction</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a temporary <code>ClientStrong</code>\nReturns the balance held by this module and available for …\nReturns an invite code for the federation that points to …\nGet a reference to a global Api handle\nReturns the fee the processing of this input requires.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLeave the federation\nTurn a typed <code>ClientInput</code> into a dyn version\nTurn a typed <code>ClientOutput</code> into a dyn version\nTurn a <code>typed</code> into a dyn version\nTurn a typed input into a dyn version\nTurn a typed output into a dyn version\nThis method starts n state machines with given operation …\nSee <code>Self::manual_operation_start</code>, just inside a database …\nAn <code>Database::autocommit</code> on module’s own database …\nGet a reference to <code>DatabaseTransaction</code> isolated database …\nReturns the fee the processing of this output requires.\nGet a reference back to client module from the <code>Self</code>\nInitialize client.\nReturns a stream that will output the updated module …\nDoes this module support being a primary module\nSee <code>crate::Client::transaction_updates</code>\nGet the <code>ClientContext</code> for later use\nGet the <code>ClientContext</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nRetrieves the database migrations from the module to be …\nInitialize a <code>ClientModule</code> instance from its config\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRecover the state of the client module, optionally from an …\nRun recover of a module from federation consensus history\nApi versions of the corresponding server side module’s …\nSee <code>ClientModuleInit::supported_api_versions</code>\n<code>ClientModuleInit</code> of this recovery logic.\nModule specific logic for …\nCommon state tracked during recovery from history\nDelete the recovery state from the database\nFinalize the recovery converting the tracked state to final\nReturns the argument unchanged.\nHandle transaction input, adjusting the current state\nHandle transaction output, adjusting the current state\nHandle session outcome, adjusting the current state\nHandle session outcome, adjusting the current state\nCalls <code>U::from(self)</code>.\nTry to load the existing state previously stored with …\nRead the finalization status\nNew empty state to start recovery from, and session number …\nCalled before <code>finalize_dbtx</code>, to allow final state changes …\nStore the current recovery state in the database\nStore finalization status\nA backup type for modules without a backup implementation. …\nProgress of the recovery\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRepresents an operation triggered by a user, typically …\nEither a stream of operation updates if the operation hasn…\nWraps an operation update stream such that the last update …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a stream no matter if the operation is finished. …\nReturns the last <code>limit</code> operations. To fetch the next page, …\nReturns the meta data of the operation. This is a JSON …\nReturns the kind of the module that generated the operation\nTries to set the outcome of an operation, but only logs an …\nReturns the last state update of the operation, if any was …\nReturns an a <code>UpdateStreamOrOutcome</code> enum that can be …\nSets the outcome of an operation\nType representing the secret\nJust uses 64 random bytes and derives the secret from them\nTrait defining a way to generate, serialize and …\nDeserialization function for the external encoding\nSerialization function for the external encoding\nReturns the argument unchanged.\nConvenience function to derive fedimint-client root secret …\nCalls <code>U::from(self)</code>.\nRandom generation function for the external secret type\nConversion function from the external encoding to the …\nA transaction that acts as isolated for module code but …\nAdditional data made available to state machines of a …\nA shared context for a module client state machine\nA type-erased state of a state machine belonging to a …\nExecutor that drives forward state machines under its …\nBuilder to which module clients can be attached and used …\nObject-safe version of <code>State</code>\nAdditional resources made available in this module’s …\nState transition notifier for a specific module instance …\nState transition notifier owned by the modularized client …\nNotifier send handle that can be shared to places where we …\nImplementors act as state machines that can be executed\nRepresents one or multiple possible state transitions …\n<code>S</code> limits the type of state that can be subscribed to the …\nBroadcast channel used to send state transitions to all …\nClone state\nDatabase used to load all states that happened before …\nDatabase used to load all states that happened before …\nHelper to notify modules about state transitions\nOperation this state machine belongs to. See <code>OperationId</code> …\nOperation this state machine belongs to. See <code>OperationId</code> …\nState machine state interface\nState transition function that, using the output of the …\nAll possible transitions from the current state to other …\nAll possible transitions from the state\nFuture that will block until a state transition is …\nA transaction that acts as isolated for module code but …\nReturns the argument unchanged.\nReturns the non-isolated database transaction only …\nCalls <code>U::from(self)</code>.\nReturns the isolated database transaction for the module.\nA state that is able to make progress eventually\nSee <code>ActiveStateKey</code>\nExecutor that drives forward state machines under its …\nBuilder to which module clients can be attached and used …\nPrefixes for executor DB entries\nA past or final state of a state machine\nSee <code>InactiveStateKey</code>\nAfter how many attempts a DB transaction is aborted with …\nAdds a number of state machines to the executor …\nAdds a number of state machines to the executor atomically …\nBuild <code>Executor</code> and spawn background task in <code>tasks</code> …\nCreates an <code>ExecutorBuilder</code>\n<strong>Mostly used for testing</strong>\n<strong>Mostly used for testing</strong>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nOnly meant for debug tooling\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a reference to the <code>Notifier</code> that can be used to …\nAny time executor should notice state machine update (e.g. …\nStarts the executor, returning a receiver that will be …\nStarts the background thread that runs the state machines. …\nStops the executor, returning <code>Some(())</code> if the executor was …\nSee <code>Executor::stop_executor</code>.\nStops the background task that runs the state machines.\nAllow executor being built to run state machines …\nAllow executor being built to run state machines …\nAllow executor to build state machines associated with the …\nState transition notifier for a specific module instance …\nState transition notifier owned by the modularized client …\nNotifier send handle that can be shared to places where we …\n<code>S</code> limits the type of state that can be subscribed to the …\nBroadcast channel used to send state transitions to all …\nDatabase used to load all states that happened before …\nDatabase used to load all states that happened before …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new notifier for a specific module instance that …\nNotify all subscribers of a state transition\nNotify all subscribers of a state transition\nCreate a <code>NotifierSender</code> handle that lets the owner trigger …\nSubscribe to state transitions belonging to an operation …\nSubscribe to all state transitions belonging to the module …\nAdditional data made available to state machines of a …\nA shared context for a module client state machine\nA type-erased state of a state machine belonging to a …\nSomething that can be a <code>DynContext</code> for a state machine\nObject-safe version of <code>State</code>\nAdditional resources made available in this module’s …\nImplementors act as state machines that can be executed\nRepresents one or multiple possible state transitions …\nClone state\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>true</code> if this state allows no further transitions\nCreates a new <code>StateTransition</code> where the <code>trigger</code> future …\nOperation this state machine belongs to. See <code>OperationId</code> …\nOperation this state machine belongs to. See <code>OperationId</code> …\nState transition function that, using the output of the …\nAll possible transitions from the current state to other …\nAll possible transitions from the state\nFuture that will block until a state transition is …\nThe transaction has been accepted in consensus\nThe transaction has been created and potentially already …\nThe transaction has been rejected by a quorum on submission\nReserved module instance id used for client-internal state …\nState machine to (re-)submit a transaction until it is …\nState machine for submitting transactions\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe transaction has been accepted in consensus\nThe transaction has been created and potentially already …\nThe transaction has been rejected by a quorum on submission\nReserved module instance id used for client-internal state …\nState machine to (re-)submit a transaction until it is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")