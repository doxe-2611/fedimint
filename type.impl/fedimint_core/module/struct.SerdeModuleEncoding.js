(function() {var type_impls = {
"fedimint_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#impl-Clone-for-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#915-925\">source</a><a href=\"#impl-Debug-for-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#919-924\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T: <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26T%3E-for-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#927-934\">source</a><a href=\"#impl-From%3C%26T%3E-for-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a>&gt; for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#928-933\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&T>","fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#impl-Hash-for-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#impl-PartialEq-for-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#936-961\">source</a><a href=\"#impl-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a> + 'static&gt; <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.try_into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#937-940\">source</a><h4 class=\"code-header\">pub fn <a href=\"fedimint_core/module/struct.SerdeModuleEncoding.html#tymethod.try_into_inner\" class=\"fn\">try_into_inner</a>(\n    &amp;self,\n    modules: &amp;<a class=\"type\" href=\"fedimint_core/module/registry/type.ModuleDecoderRegistry.html\" title=\"type fedimint_core::module::registry::ModuleDecoderRegistry\">ModuleDecoderRegistry</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"fedimint_core/encoding/struct.DecodeError.html\" title=\"struct fedimint_core::encoding::DecodeError\">DecodeError</a>&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_into_inner_known_module_kind\" class=\"method\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#950-960\">source</a><h4 class=\"code-header\">pub fn <a href=\"fedimint_core/module/struct.SerdeModuleEncoding.html#tymethod.try_into_inner_known_module_kind\" class=\"fn\">try_into_inner_known_module_kind</a>(\n    &amp;self,\n    decoder: &amp;<a class=\"struct\" href=\"fedimint_core/core/struct.Decoder.html\" title=\"struct fedimint_core::core::Decoder\">Decoder</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"fedimint_core/encoding/struct.DecodeError.html\" title=\"struct fedimint_core::encoding::DecodeError\">DecodeError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>In cases where we know exactly which module kind we expect but don’t\nhave access to all decoders this function can be used instead.</p>\n<p>Note that it just assumes the decoded module instance id to be valid\nsince it cannot validate against the decoder registry. The lack of\naccess to a decoder registry also makes decoding structs impossible that\nthemselves contain module dyn-types (e.g. a module output containing a\nfedimint transaction).</p>\n</div></details></div></details>",0,"fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#impl-Serialize-for-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"],["<section id=\"impl-Eq-for-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#impl-Eq-for-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h3></section>","Eq","fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"],["<section id=\"impl-StructuralPartialEq-for-SerdeModuleEncoding%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_core/module/mod.rs.html#909\">source</a><a href=\"#impl-StructuralPartialEq-for-SerdeModuleEncoding%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;</h3></section>","StructuralPartialEq","fedimint_core::api::SerdeOutputOutcome","fedimint_core::transaction::SerdeTransaction"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()