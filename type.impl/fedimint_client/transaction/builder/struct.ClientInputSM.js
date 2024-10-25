(function() {
    var type_impls = Object.fromEntries([["fedimint_client",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ClientInputSM%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#28\">Source</a><a href=\"#impl-Clone-for-ClientInputSM%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInputSM.html\" title=\"struct fedimint_client::transaction::builder::ClientInputSM\">ClientInputSM</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#28\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInputSM.html\" title=\"struct fedimint_client::transaction::builder::ClientInputSM\">ClientInputSM</a>&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","fedimint_client::InstancelessDynClientInputSM"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoDynInstance-for-ClientInputSM%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#152-163\">Source</a><a href=\"#impl-IntoDynInstance-for-ClientInputSM%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"fedimint_core/core/trait.IntoDynInstance.html\" title=\"trait fedimint_core::core::IntoDynInstance\">IntoDynInstance</a> for <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInputSM.html\" title=\"struct fedimint_client::transaction::builder::ClientInputSM\">ClientInputSM</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"fedimint_core/core/trait.IntoDynInstance.html\" title=\"trait fedimint_core::core::IntoDynInstance\">IntoDynInstance</a>&lt;DynType = <a class=\"struct\" href=\"fedimint_client/sm/state/struct.DynState.html\" title=\"struct fedimint_client::sm::state::DynState\">DynState</a>&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.DynType\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#156\">Source</a><a href=\"#associatedtype.DynType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"fedimint_core/core/trait.IntoDynInstance.html#associatedtype.DynType\" class=\"associatedtype\">DynType</a> = <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInputSM.html\" title=\"struct fedimint_client::transaction::builder::ClientInputSM\">ClientInputSM</a></h4></section></summary><div class='docblock'>The type erased version of the type implementing this trait</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_dyn\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_client/transaction/builder.rs.html#158-162\">Source</a><a href=\"#method.into_dyn\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fedimint_core/core/trait.IntoDynInstance.html#tymethod.into_dyn\" class=\"fn\">into_dyn</a>(self, module_instance_id: <a class=\"type\" href=\"fedimint_core/core/type.ModuleInstanceId.html\" title=\"type fedimint_core::core::ModuleInstanceId\">ModuleInstanceId</a>) -&gt; <a class=\"struct\" href=\"fedimint_client/transaction/builder/struct.ClientInputSM.html\" title=\"struct fedimint_client::transaction::builder::ClientInputSM\">ClientInputSM</a></h4></section></summary><div class='docblock'>Convert <code>self</code> into its type-erased equivalent</div></details></div></details>","IntoDynInstance","fedimint_client::InstancelessDynClientInputSM"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[5318]}