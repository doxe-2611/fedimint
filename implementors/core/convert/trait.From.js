(function() {var implementors = {
"fedimint_bitcoind":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_bitcoind/struct.DynBitcoindRpc.html\" title=\"struct fedimint_bitcoind::DynBitcoindRpc\">DynBitcoindRpc</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_bitcoind/trait.IBitcoindRpc.html\" title=\"trait fedimint_bitcoind::IBitcoindRpc\">IBitcoindRpc</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_bitcoind/struct.DynBitcoindRpcFactory.html\" title=\"struct fedimint_bitcoind::DynBitcoindRpcFactory\">DynBitcoindRpcFactory</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_bitcoind/trait.IBitcoindRpcFactory.html\" title=\"trait fedimint_bitcoind::IBitcoindRpcFactory\">IBitcoindRpcFactory</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"]],
"fedimint_cli":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_core/api/struct.FederationError.html\" title=\"struct fedimint_core::api::FederationError\">FederationError</a>&gt; for <a class=\"struct\" href=\"fedimint_cli/struct.CliError.html\" title=\"struct fedimint_cli::CliError\">CliError</a>"]],
"fedimint_client":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_client/module/struct.DynClientModule.html\" title=\"struct fedimint_client::module::DynClientModule\">DynClientModule</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_client/module/trait.IClientModule.html\" title=\"trait fedimint_client::module::IClientModule\">IClientModule</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"fedimint_client/struct.DynGlobalClientContext.html\" title=\"struct fedimint_client::DynGlobalClientContext\">DynGlobalClientContext</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"fedimint_client/trait.IGlobalClientContext.html\" title=\"trait fedimint_client::IGlobalClientContext\">IGlobalClientContext</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.75/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"fedimint_client/enum.AddStateMachinesError.html\" title=\"enum fedimint_client::AddStateMachinesError\">AddStateMachinesError</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_client/module/init/struct.DynClientModuleInit.html\" title=\"struct fedimint_client::module::init::DynClientModuleInit\">DynClientModuleInit</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_client/module/init/trait.IClientModuleInit.html\" title=\"trait fedimint_client::module::init::IClientModuleInit\">IClientModuleInit</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_client/struct.DynGlobalClientContext.html\" title=\"struct fedimint_client::DynGlobalClientContext\">DynGlobalClientContext</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_client/trait.IGlobalClientContext.html\" title=\"trait fedimint_client::IGlobalClientContext\">IGlobalClientContext</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"]],
"fedimint_core":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/core/server/struct.DynServerModule.html\" title=\"struct fedimint_core::core::server::DynServerModule\">DynServerModule</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/core/server/trait.IServerModule.html\" title=\"trait fedimint_core::core::server::IServerModule\">IServerModule</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Amount&gt; for <a class=\"struct\" href=\"fedimint_core/struct.Amount.html\" title=\"struct fedimint_core::Amount\">Amount</a>"],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;M, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"fedimint_core/config/struct.ModuleInitRegistry.html\" title=\"struct fedimint_core::config::ModuleInitRegistry\">ModuleInitRegistry</a>&lt;M&gt;<span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"fedimint_core/module/trait.IDynCommonModuleInit.html\" title=\"trait fedimint_core::module::IDynCommonModuleInit\">IDynCommonModuleInit</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt;,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/module/struct.DynCommonModuleInit.html\" title=\"struct fedimint_core::module::DynCommonModuleInit\">DynCommonModuleInit</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/module/trait.IDynCommonModuleInit.html\" title=\"trait fedimint_core::module::IDynCommonModuleInit\">IDynCommonModuleInit</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"fedimint_core/api/enum.PeerError.html\" title=\"enum fedimint_core::api::PeerError\">PeerError</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/api/struct.DynModuleApi.html\" title=\"struct fedimint_core::api::DynModuleApi\">DynModuleApi</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/api/trait.IModuleFederationApi.html\" title=\"trait fedimint_core::api::IModuleFederationApi\">IModuleFederationApi</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"],["impl&lt;T: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Receiver&lt;T&gt;&gt; for <a class=\"struct\" href=\"fedimint_core/util/broadcaststream/struct.BroadcastStream.html\" title=\"struct fedimint_core::util::broadcaststream::BroadcastStream\">BroadcastStream</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_core/struct.TransactionId.html\" title=\"struct fedimint_core::TransactionId\">TransactionId</a>&gt; for Hash"],["impl&lt;M, State&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u16.html\">u16</a>, (<a class=\"struct\" href=\"fedimint_core/core/struct.ModuleKind.html\" title=\"struct fedimint_core::core::ModuleKind\">ModuleKind</a>, M), <a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"fedimint_core/module/registry/struct.ModuleRegistry.html\" title=\"struct fedimint_core::module::registry::ModuleRegistry\">ModuleRegistry</a>&lt;M, State&gt;<span class=\"where fmt-newline\">where\n    State: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"fedimint_core/core/struct.ModuleKind.html\" title=\"struct fedimint_core::core::ModuleKind\">ModuleKind</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ParseAmountError&gt; for <a class=\"enum\" href=\"fedimint_core/enum.ParseAmountError.html\" title=\"enum fedimint_core::ParseAmountError\">ParseAmountError</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/api/struct.DynGlobalApi.html\" title=\"struct fedimint_core::api::DynGlobalApi\">DynGlobalApi</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/api/trait.IGlobalFederationApi.html\" title=\"trait fedimint_core::api::IGlobalFederationApi\">IGlobalFederationApi</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.75/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"fedimint_core/config/enum.DkgError.html\" title=\"enum fedimint_core::config::DkgError\">DkgError</a>"],["impl&lt;W&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;W&gt; for <a class=\"struct\" href=\"fedimint_core/encoding/struct.CountWrite.html\" title=\"struct fedimint_core::encoding::CountWrite\">CountWrite</a>&lt;W&gt;"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/module/struct.DynServerModuleInit.html\" title=\"struct fedimint_core::module::DynServerModuleInit\">DynServerModuleInit</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/module/trait.IServerModuleInit.html\" title=\"trait fedimint_core::module::IServerModuleInit\">IServerModuleInit</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSend.html\" title=\"trait fedimint_core::task::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"fedimint_core/task/trait.MaybeSync.html\" title=\"trait fedimint_core::task::MaybeSync\">MaybeSync</a> + 'static,</span>"],["impl&lt;T: <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.reference.html\">&amp;T</a>&gt; for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_core/struct.TransactionId.html\" title=\"struct fedimint_core::TransactionId\">TransactionId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/core/num/error/struct.ParseIntError.html\" title=\"struct core::num::error::ParseIntError\">ParseIntError</a>&gt; for <a class=\"enum\" href=\"fedimint_core/enum.ParseAmountError.html\" title=\"enum fedimint_core::ParseAmountError\">ParseAmountError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.75/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"fedimint_core/api/enum.OutputOutcomeError.html\" title=\"enum fedimint_core::api::OutputOutcomeError\">OutputOutcomeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_core/api/struct.FederationError.html\" title=\"struct fedimint_core::api::FederationError\">FederationError</a>&gt; for <a class=\"enum\" href=\"fedimint_core/api/enum.OutputOutcomeError.html\" title=\"enum fedimint_core::api::OutputOutcomeError\">OutputOutcomeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_core/struct.PeerId.html\" title=\"struct fedimint_core::PeerId\">PeerId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u16.html\">u16</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"enum\" href=\"fedimint_core/encoding/enum.DynRawFallback.html\" title=\"enum fedimint_core::encoding::DynRawFallback\">DynRawFallback</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_core/cancellable/struct.Cancelled.html\" title=\"struct fedimint_core::cancellable::Cancelled\">Cancelled</a>&gt; for <a class=\"enum\" href=\"fedimint_core/config/enum.DkgError.html\" title=\"enum fedimint_core::config::DkgError\">DkgError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"fedimint_core/struct.PeerId.html\" title=\"struct fedimint_core::PeerId\">PeerId</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"fedimint_core/db/struct.Database.html\" title=\"struct fedimint_core::db::Database\">Database</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"fedimint_core/db/trait.IRawDatabase.html\" title=\"trait fedimint_core::db::IRawDatabase\">IRawDatabase</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/url/2.4.1/url/struct.Url.html\" title=\"struct url::Url\">Url</a>&gt; for <a class=\"struct\" href=\"fedimint_core/util/struct.SafeUrl.html\" title=\"struct fedimint_core::util::SafeUrl\">SafeUrl</a>"]],
"fedimint_ln_common":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln_common/contracts/struct.ContractId.html\" title=\"struct fedimint_ln_common::contracts::ContractId\">ContractId</a>&gt; for Hash"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_ln_common/contracts/struct.ContractId.html\" title=\"struct fedimint_ln_common::contracts::ContractId\">ContractId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln_common/contracts/incoming/struct.OfferId.html\" title=\"struct fedimint_ln_common::contracts::incoming::OfferId\">OfferId</a>&gt; for Hash"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln_common/struct.UnknownLightningOutputVariantError.html\" title=\"struct fedimint_ln_common::UnknownLightningOutputVariantError\">UnknownLightningOutputVariantError</a>&gt; for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningOutputError.html\" title=\"enum fedimint_ln_common::LightningOutputError\">LightningOutputError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_ln_common/contracts/incoming/struct.OfferId.html\" title=\"struct fedimint_ln_common::contracts::incoming::OfferId\">OfferId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln_common/struct.UnknownLightningInputVariantError.html\" title=\"struct fedimint_ln_common::UnknownLightningInputVariantError\">UnknownLightningInputVariantError</a>&gt; for <a class=\"enum\" href=\"fedimint_ln_common/enum.LightningInputError.html\" title=\"enum fedimint_ln_common::LightningInputError\">LightningInputError</a>"]],
"fedimint_mint_client":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_mint_client/backup/recovery/struct.CompressedBlindedMessage.html\" title=\"struct fedimint_mint_client::backup::recovery::CompressedBlindedMessage\">CompressedBlindedMessage</a>&gt; for <a class=\"struct\" href=\"tbs/struct.BlindedMessage.html\" title=\"struct tbs::BlindedMessage\">BlindedMessage</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tbs/struct.BlindedMessage.html\" title=\"struct tbs::BlindedMessage\">BlindedMessage</a>&gt; for <a class=\"struct\" href=\"fedimint_mint_client/backup/recovery/struct.CompressedBlindedMessage.html\" title=\"struct fedimint_mint_client::backup::recovery::CompressedBlindedMessage\">CompressedBlindedMessage</a>"]],
"fedimint_mint_common":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_mint_common/struct.UnknownMintOutputVariantError.html\" title=\"struct fedimint_mint_common::UnknownMintOutputVariantError\">UnknownMintOutputVariantError</a>&gt; for <a class=\"enum\" href=\"fedimint_mint_common/enum.MintOutputError.html\" title=\"enum fedimint_mint_common::MintOutputError\">MintOutputError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_mint_common/struct.UnknownMintInputVariantError.html\" title=\"struct fedimint_mint_common::UnknownMintInputVariantError\">UnknownMintInputVariantError</a>&gt; for <a class=\"enum\" href=\"fedimint_mint_common/enum.MintInputError.html\" title=\"enum fedimint_mint_common::MintInputError\">MintInputError</a>"]],
"fedimint_rocksdb":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;DBCommon&lt;SingleThreaded, OptimisticTransactionDBInner&gt;&gt; for <a class=\"struct\" href=\"fedimint_rocksdb/struct.RocksDb.html\" title=\"struct fedimint_rocksdb::RocksDb\">RocksDb</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_rocksdb/struct.RocksDb.html\" title=\"struct fedimint_rocksdb::RocksDb\">RocksDb</a>&gt; for OptimisticTransactionDB"]],
"fedimint_wallet_common":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_wallet_common/txoproof/enum.PegInProofError.html\" title=\"enum fedimint_wallet_common::txoproof::PegInProofError\">PegInProofError</a>&gt; for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletInputError.html\" title=\"enum fedimint_wallet_common::WalletInputError\">WalletInputError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_wallet_common/struct.UnknownWalletInputVariantError.html\" title=\"struct fedimint_wallet_common::UnknownWalletInputVariantError\">UnknownWalletInputVariantError</a>&gt; for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletInputError.html\" title=\"enum fedimint_wallet_common::WalletInputError\">WalletInputError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_wallet_common/keys/struct.CompressedPublicKey.html\" title=\"struct fedimint_wallet_common::keys::CompressedPublicKey\">CompressedPublicKey</a>&gt; for PublicKey"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_wallet_common/struct.UnknownWalletOutputVariantError.html\" title=\"struct fedimint_wallet_common::UnknownWalletOutputVariantError\">UnknownWalletOutputVariantError</a>&gt; for <a class=\"enum\" href=\"fedimint_wallet_common/enum.WalletOutputError.html\" title=\"enum fedimint_wallet_common::WalletOutputError\">WalletOutputError</a>"]],
"gateway_cln_extension":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.75/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"gateway_cln_extension/enum.ClnExtensionError.html\" title=\"enum gateway_cln_extension::ClnExtensionError\">ClnExtensionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RpcError&gt; for <a class=\"enum\" href=\"gateway_cln_extension/enum.ClnExtensionError.html\" title=\"enum gateway_cln_extension::ClnExtensionError\">ClnExtensionError</a>"]],
"ln_gateway":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_core/api/struct.FederationError.html\" title=\"struct fedimint_core::api::FederationError\">FederationError</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.GatewayError.html\" title=\"enum ln_gateway::GatewayError\">GatewayError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ln_gateway/rpc/rpc_client/struct.Error.html\" title=\"struct ln_gateway::rpc::rpc_client::Error\">Error</a>&gt; for <a class=\"enum\" href=\"ln_gateway/rpc/rpc_client/enum.GatewayRpcError.html\" title=\"enum ln_gateway::rpc::rpc_client::GatewayRpcError\">GatewayRpcError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"ln_gateway/state_machine/pay/struct.OutgoingPaymentError.html\" title=\"struct ln_gateway::state_machine::pay::OutgoingPaymentError\">OutgoingPaymentError</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.73.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"ln_gateway/enum.GatewayError.html\" title=\"enum ln_gateway::GatewayError\">GatewayError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"ln_gateway/state_machine/struct.GatewayClientContext.html\" title=\"struct ln_gateway::state_machine::GatewayClientContext\">GatewayClientContext</a>&gt; for <a class=\"struct\" href=\"fedimint_ln_common/struct.LightningClientContext.html\" title=\"struct fedimint_ln_common::LightningClientContext\">LightningClientContext</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.75/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.GatewayError.html\" title=\"enum ln_gateway::GatewayError\">GatewayError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"ln_gateway/lnrpc_client/enum.LightningRpcError.html\" title=\"enum ln_gateway::lnrpc_client::LightningRpcError\">LightningRpcError</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.GatewayError.html\" title=\"enum ln_gateway::GatewayError\">GatewayError</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()