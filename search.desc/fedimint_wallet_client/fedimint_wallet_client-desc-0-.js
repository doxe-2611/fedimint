searchState.loadedDescShard("fedimint_wallet_client", 0, "A raw scriptpubkey (including pay-to-pubkey) under Legacy …\nUsed for estimating a feerate that will confirm within a …\nPay-to-PubKey-Hash\nAllows a user to bump the fees of a <code>PendingTransaction</code>\nPay-to-ScriptHash(includes nested wsh/wpkh/sorted multi)\nPay-to-Taproot\nThe non-resource, just plain-data parts of …\nContains the Bitcoin transaction id of the transaction …\nPay-to-Witness-PubKey-Hash\nPay-to-Witness-ScriptHash with Segwitv0 context\nAwait for deposit\nThe bitcoin transaction is saved as soon as we see it so …\nLegacy, state-machine based peg-ins, replaced by …\nFees expressed as an increase over existing peg-out fees\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the child index to derive the next peg-in tweak …\nFetches the fees that would need to be paid to make the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIndex of the deposit output\nCalled every time a peg-in was claimed\nPeg-in monitor: a task monitoring deposit addresses for …\nUpdated to wake up pegin monitor\nAttempt to increase the fee of a onchain withdraw …\nSchedule given address for immediate re-check for deposits\nLike <code>Self::recheck_pegin_address</code> but by <code>operation_id</code>\nBitcoin tx id to bump the fees for\nAttempt to withdraw a given <code>amount</code> of Bitcoin to a …\nAn iterator over the variants of DbKeyPrefix\nA counter tracking next index to use to derive a peg-in …\nPeg in index that was already allocated and is being …\nAn index of a deposit address\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConfigures which bitcoin RPC to use\nSee <code>WalletConfigConsensus::client_default_bitcoin_rpc</code>.\nPoints to a Bitcoin API that the client can use to …\nPoints to a Bitcoin API that the client can use to …\nIf we cannot determine the feerate from our bitcoin node, …\nFees to be charged for deposits and withdraws <em>by the </em>…\nFees for bitcoin transactions\nHow many bitcoin blocks to wait before considering a …\nConfirmations required for a peg in to be accepted by …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBitcoin network (e.g. testnet, bitcoin)\nThe bitcoin network the client will use\nThe public keys for the bitcoin multisig\nThe federations public peg-in-descriptor\nThe federations public peg-in-descriptor\nSecret key for signing bitcoin multisig transactions\nThe state machine driving forward a deposit (aka peg-in).\nThe bitcoin transaction is saved as soon as we see it so …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIndex of the deposit output\nFedimint transaction id in which the deposit is being …\nKey pair of which the public was used to tweak the …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA peg-in transaction was already claimed (state machine …\nOutcome of checking a single deposit Bitcoin transaction …\nA state machine was created to claim the peg-in\nA helper struct meant to combined data from all …\nThere’s a tx pending (needs more confirmation)\nQuery via btc rpc for a history of an address derived with …\nIndex keys due for a check\nCombine current state with another record\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalculate next actions from the database\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNearest key that is not due yet\nCurrent time\nDesired retry delay for a single outcome\nDesired retry delay for a bunch of outcomes.\nA deposit monitoring task\nAn object that can be used as a Ricardian contract to …\nA key or object containing keys that may be tweaked for …\nSerialize the contract in a deterministic way to be used …\nTweak the key with a <code>tweak</code> contract\nA proof about a script owning a certain output. Verifiable …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\ngraph LR Created –&gt; Success Created –&gt; Aborted\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")