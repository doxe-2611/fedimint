(function() {var type_impls = {
"fedimint_client":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ClientOutput%3CO,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#38\">source</a><a href=\"#impl-Clone-for-ClientOutput%3CO,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientOutput.html\" title=\"struct fedimint_client::transaction::builder::ClientOutput\">ClientOutput</a>&lt;O, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#38\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientOutput.html\" title=\"struct fedimint_client::transaction::builder::ClientOutput\">ClientOutput</a>&lt;O, S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","fedimint_client::InstancelessDynClientOutput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoDynInstance-for-ClientOutput%3CO,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#45-59\">source</a><a href=\"#impl-IntoDynInstance-for-ClientOutput%3CO,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O, S&gt; IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientOutput.html\" title=\"struct fedimint_client::transaction::builder::ClientOutput\">ClientOutput</a>&lt;O, S&gt;<div class=\"where\">where\n    O: IntoDynInstance&lt;DynType = DynOutput&gt; + 'static,\n    S: IntoDynInstance&lt;DynType = <a class=\"struct\" href=\"fedimint_client/sm/state/struct.DynState.html\" title=\"struct fedimint_client::sm::state::DynState\">DynState</a>&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.DynType\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.DynType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">DynType</a> = <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientOutput.html\" title=\"struct fedimint_client::transaction::builder::ClientOutput\">ClientOutput</a></h4></section></summary><div class='docblock'>The type erased version of the type implementing this trait</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_dyn\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#52-58\">source</a><a href=\"#method.into_dyn\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">into_dyn</a>(self, module_instance_id: ModuleInstanceId) -&gt; <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientOutput.html\" title=\"struct fedimint_client::transaction::builder::ClientOutput\">ClientOutput</a></h4></section></summary><div class='docblock'>Convert <code>self</code> into its type-erased equivalent</div></details></div></details>","IntoDynInstance","fedimint_client::InstancelessDynClientOutput"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()