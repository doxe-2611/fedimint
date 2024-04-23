(function() {var type_impls = {
"fedimint_client":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ClientInput%3CI,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#17\">source</a><a href=\"#impl-Clone-for-ClientInput%3CI,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInput.html\" title=\"struct fedimint_client::transaction::builder::ClientInput\">ClientInput</a>&lt;I, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#17\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInput.html\" title=\"struct fedimint_client::transaction::builder::ClientInput\">ClientInput</a>&lt;I, S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","fedimint_client::InstancelessDynClientInput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoDynInstance-for-ClientInput%3CI,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#25-40\">source</a><a href=\"#impl-IntoDynInstance-for-ClientInput%3CI,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, S&gt; IntoDynInstance for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInput.html\" title=\"struct fedimint_client::transaction::builder::ClientInput\">ClientInput</a>&lt;I, S&gt;<div class=\"where\">where\n    I: IntoDynInstance&lt;DynType = DynInput&gt; + 'static,\n    S: IntoDynInstance&lt;DynType = <a class=\"struct\" href=\"fedimint_client/sm/state/struct.DynState.html\" title=\"struct fedimint_client::sm::state::DynState\">DynState</a>&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.DynType\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.DynType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">DynType</a> = <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInput.html\" title=\"struct fedimint_client::transaction::builder::ClientInput\">ClientInput</a></h4></section></summary><div class='docblock'>The type erased version of the type implementing this trait</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_dyn\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#32-39\">source</a><a href=\"#method.into_dyn\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">into_dyn</a>(self, module_instance_id: ModuleInstanceId) -&gt; <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInput.html\" title=\"struct fedimint_client::transaction::builder::ClientInput\">ClientInput</a></h4></section></summary><div class='docblock'>Convert <code>self</code> into its type-erased equivalent</div></details></div></details>","IntoDynInstance","fedimint_client::InstancelessDynClientInput"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()