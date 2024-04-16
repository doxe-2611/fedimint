(function() {var implementors = {
"fedimint_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_client/module/recovery/enum.NoModuleBackup.html\" title=\"enum fedimint_client::module::recovery::NoModuleBackup\">NoModuleBackup</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_client/transaction/sm/enum.TxSubmissionStates.html\" title=\"enum fedimint_client::transaction::sm::TxSubmissionStates\">TxSubmissionStates</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/transaction/sm/struct.TxSubmissionContext.html\" title=\"struct fedimint_client::transaction::sm::TxSubmissionContext\">TxSubmissionContext</a>"],["impl&lt;I, S&gt; IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInput.html\" title=\"struct fedimint_client::transaction::builder::ClientInput\">ClientInput</a>&lt;I, S&gt;<div class=\"where\">where\n    I: IntoDynInstance&lt;DynType = DynInput&gt; + 'static,\n    S: IntoDynInstance&lt;DynType = <a class=\"struct\" href=\"fedimint_client/sm/state/struct.DynState.html\" title=\"struct fedimint_client::sm::state::DynState\">DynState</a>&gt; + 'static,</div>"],["impl&lt;O, S&gt; IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientOutput.html\" title=\"struct fedimint_client::transaction::builder::ClientOutput\">ClientOutput</a>&lt;O, S&gt;<div class=\"where\">where\n    O: IntoDynInstance&lt;DynType = DynOutput&gt; + 'static,\n    S: IntoDynInstance&lt;DynType = <a class=\"struct\" href=\"fedimint_client/sm/state/struct.DynState.html\" title=\"struct fedimint_client::sm::state::DynState\">DynState</a>&gt; + 'static,</div>"],["impl&lt;S&gt; IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/sm/state/struct.OperationState.html\" title=\"struct fedimint_client::sm::state::OperationState\">OperationState</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"fedimint_client/sm/state/trait.State.html\" title=\"trait fedimint_client::sm::state::State\">State</a>,</div>"]],
"fedimint_core":[],
"fedimint_dummy_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_dummy_client/states/enum.DummyStateMachine.html\" title=\"enum fedimint_dummy_client::states::DummyStateMachine\">DummyStateMachine</a>"]],
"fedimint_dummy_common":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_dummy_common/enum.DummyInputError.html\" title=\"enum fedimint_dummy_common::DummyInputError\">DummyInputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_dummy_common/enum.DummyOutputError.html\" title=\"enum fedimint_dummy_common::DummyOutputError\">DummyOutputError</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_dummy_common/config/struct.DummyClientConfig.html\" title=\"struct fedimint_dummy_common::config::DummyClientConfig\">DummyClientConfig</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_dummy_common/struct.DummyConsensusItem.html\" title=\"struct fedimint_dummy_common::DummyConsensusItem\">DummyConsensusItem</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_dummy_common/struct.DummyInput.html\" title=\"struct fedimint_dummy_common::DummyInput\">DummyInput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_dummy_common/struct.DummyOutput.html\" title=\"struct fedimint_dummy_common::DummyOutput\">DummyOutput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_dummy_common/struct.DummyOutputOutcome.html\" title=\"struct fedimint_dummy_common::DummyOutputOutcome\">DummyOutputOutcome</a>"]],
"fedimint_empty_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_empty_client/states/enum.EmptyStateMachine.html\" title=\"enum fedimint_empty_client::states::EmptyStateMachine\">EmptyStateMachine</a>"]],
"fedimint_empty_common":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_empty_common/enum.EmptyInputError.html\" title=\"enum fedimint_empty_common::EmptyInputError\">EmptyInputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_empty_common/enum.EmptyOutputError.html\" title=\"enum fedimint_empty_common::EmptyOutputError\">EmptyOutputError</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_empty_common/config/struct.EmptyClientConfig.html\" title=\"struct fedimint_empty_common::config::EmptyClientConfig\">EmptyClientConfig</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_empty_common/struct.EmptyConsensusItem.html\" title=\"struct fedimint_empty_common::EmptyConsensusItem\">EmptyConsensusItem</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_empty_common/struct.EmptyInput.html\" title=\"struct fedimint_empty_common::EmptyInput\">EmptyInput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_empty_common/struct.EmptyOutput.html\" title=\"struct fedimint_empty_common::EmptyOutput\">EmptyOutput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_empty_common/struct.EmptyOutputOutcome.html\" title=\"struct fedimint_empty_common::EmptyOutputOutcome\">EmptyOutputOutcome</a>"]],
"fedimint_ln_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_client/enum.LightningClientStateMachines.html\" title=\"enum fedimint_ln_client::LightningClientStateMachines\">LightningClientStateMachines</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_ln_client/receive/struct.LightningReceiveStateMachine.html\" title=\"struct fedimint_ln_client::receive::LightningReceiveStateMachine\">LightningReceiveStateMachine</a>"]],
"fedimint_ln_common":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningConsensusItem.html\" title=\"enum fedimint_ln_common::LightningConsensusItem\">LightningConsensusItem</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningInput.html\" title=\"enum fedimint_ln_common::LightningInput\">LightningInput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningInputError.html\" title=\"enum fedimint_ln_common::LightningInputError\">LightningInputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningOutput.html\" title=\"enum fedimint_ln_common::LightningOutput\">LightningOutput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningOutputError.html\" title=\"enum fedimint_ln_common::LightningOutputError\">LightningOutputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningOutputOutcome.html\" title=\"enum fedimint_ln_common::LightningOutputOutcome\">LightningOutputOutcome</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_ln_common/config/struct.LightningClientConfig.html\" title=\"struct fedimint_ln_common::config::LightningClientConfig\">LightningClientConfig</a>"]],
"fedimint_lnv2_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_lnv2_client/enum.LightningClientStateMachines.html\" title=\"enum fedimint_lnv2_client::LightningClientStateMachines\">LightningClientStateMachines</a>"]],
"fedimint_lnv2_common":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_lnv2_common/enum.LightningConsensusItem.html\" title=\"enum fedimint_lnv2_common::LightningConsensusItem\">LightningConsensusItem</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_lnv2_common/enum.LightningInputError.html\" title=\"enum fedimint_lnv2_common::LightningInputError\">LightningInputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_lnv2_common/enum.LightningOutput.html\" title=\"enum fedimint_lnv2_common::LightningOutput\">LightningOutput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_lnv2_common/enum.LightningOutputError.html\" title=\"enum fedimint_lnv2_common::LightningOutputError\">LightningOutputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_lnv2_common/enum.LightningOutputOutcome.html\" title=\"enum fedimint_lnv2_common::LightningOutputOutcome\">LightningOutputOutcome</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_lnv2_common/config/struct.LightningClientConfig.html\" title=\"struct fedimint_lnv2_common::config::LightningClientConfig\">LightningClientConfig</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_lnv2_common/struct.LightningInput.html\" title=\"struct fedimint_lnv2_common::LightningInput\">LightningInput</a>"]],
"fedimint_meta_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_meta_client/states/enum.MetaStateMachine.html\" title=\"enum fedimint_meta_client::states::MetaStateMachine\">MetaStateMachine</a>"]],
"fedimint_meta_common":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_meta_common/enum.MetaInputError.html\" title=\"enum fedimint_meta_common::MetaInputError\">MetaInputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_meta_common/enum.MetaOutputError.html\" title=\"enum fedimint_meta_common::MetaOutputError\">MetaOutputError</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_meta_common/config/struct.MetaClientConfig.html\" title=\"struct fedimint_meta_common::config::MetaClientConfig\">MetaClientConfig</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_meta_common/struct.MetaConsensusItem.html\" title=\"struct fedimint_meta_common::MetaConsensusItem\">MetaConsensusItem</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_meta_common/struct.MetaInput.html\" title=\"struct fedimint_meta_common::MetaInput\">MetaInput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_meta_common/struct.MetaOutput.html\" title=\"struct fedimint_meta_common::MetaOutput\">MetaOutput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_meta_common/struct.MetaOutputOutcome.html\" title=\"struct fedimint_meta_common::MetaOutputOutcome\">MetaOutputOutcome</a>"]],
"fedimint_mint_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_mint_client/backup/enum.EcashBackup.html\" title=\"enum fedimint_mint_client::backup::EcashBackup\">EcashBackup</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_mint_client/enum.MintClientStateMachines.html\" title=\"enum fedimint_mint_client::MintClientStateMachines\">MintClientStateMachines</a>"]],
"fedimint_mint_common":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_mint_common/enum.MintConsensusItem.html\" title=\"enum fedimint_mint_common::MintConsensusItem\">MintConsensusItem</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_mint_common/enum.MintInput.html\" title=\"enum fedimint_mint_common::MintInput\">MintInput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_mint_common/enum.MintInputError.html\" title=\"enum fedimint_mint_common::MintInputError\">MintInputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_mint_common/enum.MintOutput.html\" title=\"enum fedimint_mint_common::MintOutput\">MintOutput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_mint_common/enum.MintOutputError.html\" title=\"enum fedimint_mint_common::MintOutputError\">MintOutputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_mint_common/enum.MintOutputOutcome.html\" title=\"enum fedimint_mint_common::MintOutputOutcome\">MintOutputOutcome</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_mint_common/config/struct.MintClientConfig.html\" title=\"struct fedimint_mint_common::config::MintClientConfig\">MintClientConfig</a>"]],
"fedimint_unknown_common":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_unknown_common/enum.UnknownInputError.html\" title=\"enum fedimint_unknown_common::UnknownInputError\">UnknownInputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_unknown_common/enum.UnknownOutputError.html\" title=\"enum fedimint_unknown_common::UnknownOutputError\">UnknownOutputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_unknown_common/enum.UnknownOutputOutcome.html\" title=\"enum fedimint_unknown_common::UnknownOutputOutcome\">UnknownOutputOutcome</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_unknown_common/config/struct.UnknownClientConfig.html\" title=\"struct fedimint_unknown_common::config::UnknownClientConfig\">UnknownClientConfig</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_unknown_common/struct.UnknownConsensusItem.html\" title=\"struct fedimint_unknown_common::UnknownConsensusItem\">UnknownConsensusItem</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_unknown_common/struct.UnknownInput.html\" title=\"struct fedimint_unknown_common::UnknownInput\">UnknownInput</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_unknown_common/struct.UnknownOutput.html\" title=\"struct fedimint_unknown_common::UnknownOutput\">UnknownOutput</a>"]],
"fedimint_wallet_client":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_client/enum.WalletClientStates.html\" title=\"enum fedimint_wallet_client::WalletClientStates\">WalletClientStates</a>"]],
"fedimint_wallet_common":[["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletConsensusItem.html\" title=\"enum fedimint_wallet_common::WalletConsensusItem\">WalletConsensusItem</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletInput.html\" title=\"enum fedimint_wallet_common::WalletInput\">WalletInput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletInputError.html\" title=\"enum fedimint_wallet_common::WalletInputError\">WalletInputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletOutput.html\" title=\"enum fedimint_wallet_common::WalletOutput\">WalletOutput</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletOutputError.html\" title=\"enum fedimint_wallet_common::WalletOutputError\">WalletOutputError</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletOutputOutcome.html\" title=\"enum fedimint_wallet_common::WalletOutputOutcome\">WalletOutputOutcome</a>"],["impl IntoDynInstance for <a class=\"struct\" href=\"fedimint_wallet_common/config/struct.WalletClientConfig.html\" title=\"struct fedimint_wallet_common::config::WalletClientConfig\">WalletClientConfig</a>"]],
"ln_gateway":[["impl IntoDynInstance for <a class=\"enum\" href=\"ln_gateway/gateway_module_v2/enum.GatewayClientStateMachinesV2.html\" title=\"enum ln_gateway::gateway_module_v2::GatewayClientStateMachinesV2\">GatewayClientStateMachinesV2</a>"],["impl IntoDynInstance for <a class=\"enum\" href=\"ln_gateway/state_machine/enum.GatewayClientStateMachines.html\" title=\"enum ln_gateway::state_machine::GatewayClientStateMachines\">GatewayClientStateMachines</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()