(function() {var type_impls = {
"fedimint_metrics":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MetricVec%3CT%3E\" class=\"impl\"><a href=\"#impl-Clone-for-MetricVec%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for MetricVec&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + MetricVecBuilder,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; MetricVec&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","fedimint_metrics::GaugeVec","fedimint_metrics::HistogramVec","fedimint_metrics::IntCounterVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Collector-for-MetricVec%3CT%3E\" class=\"impl\"><a href=\"#impl-Collector-for-MetricVec%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Collector for MetricVec&lt;T&gt;<div class=\"where\">where\n    T: MetricVecBuilder,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.desc\" class=\"method trait-impl\"><a href=\"#method.desc\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">desc</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;Desc&gt;</h4></section></summary><div class='docblock'>Return descriptors for metrics.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.collect\" class=\"method trait-impl\"><a href=\"#method.collect\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">collect</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;MetricFamily&gt;</h4></section></summary><div class='docblock'>Collect metrics.</div></details></div></details>","Collector","fedimint_metrics::GaugeVec","fedimint_metrics::HistogramVec","fedimint_metrics::IntCounterVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MetricVec%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-MetricVec%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for MetricVec&lt;T&gt;<div class=\"where\">where\n    T: MetricVecBuilder,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","fedimint_metrics::GaugeVec","fedimint_metrics::HistogramVec","fedimint_metrics::IntCounterVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MetricVec%3CCounterVecBuilder%3CP%3E%3E\" class=\"impl\"><a href=\"#impl-MetricVec%3CCounterVecBuilder%3CP%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; MetricVec&lt;CounterVecBuilder&lt;P&gt;&gt;<div class=\"where\">where\n    P: Atomic,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    opts: Opts,\n    label_names: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;MetricVec&lt;CounterVecBuilder&lt;P&gt;&gt;, Error&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new [<code>GenericCounterVec</code>] based on the provided\n[<code>Opts</code>] and partitioned by the given label names. At least one label name must be\nprovided.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.local\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">local</a>(&amp;self) -&gt; GenericLocalCounterVec&lt;P&gt;</h4></section></summary><div class=\"docblock\"><p>Return a [<code>GenericLocalCounterVec</code>] for single thread usage.</p>\n</div></details></div></details>",0,"fedimint_metrics::IntCounterVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MetricVec%3CGaugeVecBuilder%3CP%3E%3E\" class=\"impl\"><a href=\"#impl-MetricVec%3CGaugeVecBuilder%3CP%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; MetricVec&lt;GaugeVecBuilder&lt;P&gt;&gt;<div class=\"where\">where\n    P: Atomic,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    opts: Opts,\n    label_names: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;MetricVec&lt;GaugeVecBuilder&lt;P&gt;&gt;, Error&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new [<code>GenericGaugeVec</code>] based on the provided\n[<code>Opts</code>] and partitioned by the given label names. At least one label name must\nbe provided.</p>\n</div></details></div></details>",0,"fedimint_metrics::GaugeVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MetricVec%3CHistogramVecBuilder%3E\" class=\"impl\"><a href=\"#impl-MetricVec%3CHistogramVecBuilder%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl MetricVec&lt;HistogramVecBuilder&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    opts: HistogramOpts,\n    label_names: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;MetricVec&lt;HistogramVecBuilder&gt;, Error&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"fedimint_metrics/type.HistogramVec.html\" title=\"type fedimint_metrics::HistogramVec\"><code>HistogramVec</code></a> based on the provided\n[<code>HistogramOpts</code>] and partitioned by the given label names. At least\none label name must be provided.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.local\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">local</a>(&amp;self) -&gt; LocalHistogramVec</h4></section></summary><div class=\"docblock\"><p>Return a <code>LocalHistogramVec</code> for single thread usage.</p>\n</div></details></div></details>",0,"fedimint_metrics::HistogramVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MetricVec%3CT%3E\" class=\"impl\"><a href=\"#impl-MetricVec%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; MetricVec&lt;T&gt;<div class=\"where\">where\n    T: MetricVecBuilder,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.create\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">create</a>(\n    metric_type: MetricType,\n    new_metric: T,\n    opts: &lt;T as MetricVecBuilder&gt;::P,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;MetricVec&lt;T&gt;, Error&gt;</h4></section></summary><div class=\"docblock\"><p><code>create</code> creates a MetricVec with description <code>desc</code>, a metric type <code>metric_type</code> and\na MetricVecBuilder <code>new_metric</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_metric_with_label_values\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">get_metric_with_label_values</a>(\n    &amp;self,\n    vals: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;T as MetricVecBuilder&gt;::M, Error&gt;</h4></section></summary><div class=\"docblock\"><p><code>get_metric_with_label_values</code> returns the [<code>Metric</code>] for the given slice\nof label values (same order as the VariableLabels in Desc). If that combination of\nlabel values is accessed for the first time, a new [<code>Metric</code>] is created.</p>\n<p>It is possible to call this method without using the returned [<code>Metric</code>]\nto only create the new [<code>Metric</code>] but leave it at its start value (e.g. a\n<a href=\"fedimint_metrics/struct.Histogram.html\" title=\"struct fedimint_metrics::Histogram\"><code>Histogram</code></a> without any observations).</p>\n<p>Keeping the [<code>Metric</code>] for later use is possible (and should be considered\nif performance is critical), but keep in mind that Reset, DeleteLabelValues and Delete can\nbe used to delete the [<code>Metric</code>] from the MetricVec. In that case, the\n[<code>Metric</code>] will still exist, but it will not be exported anymore, even if a\n[<code>Metric</code>] with the same label values is created later. See also the\nCounterVec example.</p>\n<p>An error is returned if the number of label values is not the same as the\nnumber of VariableLabels in Desc.</p>\n<p>Note that for more than one label value, this method is prone to mistakes\ncaused by an incorrect order of arguments. Consider get_metric_with(labels) as\nan alternative to avoid that type of mistake. For higher label numbers, the\nlatter has a much more readable (albeit more verbose) syntax, but it comes\nwith a performance overhead (for creating and processing the Labels map).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_metric_with\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">get_metric_with</a>(\n    &amp;self,\n    labels: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;T as MetricVecBuilder&gt;::M, Error&gt;</h4></section></summary><div class=\"docblock\"><p><code>get_metric_with</code> returns the [<code>Metric</code>] for the given Labels map (the\nlabel names must match those of the VariableLabels in Desc). If that label map is\naccessed for the first time, a new [<code>Metric</code>] is created. Implications of\ncreating a [<code>Metric</code>] without using it and keeping the\n[<code>Metric</code>] for later use are the same as for GetMetricWithLabelValues.</p>\n<p>An error is returned if the number and names of the Labels are inconsistent\nwith those of the VariableLabels in Desc.</p>\n<p>This method is used for the same purpose as\n<code>get_metric_with_label_values</code>. See there for pros and cons of the two\nmethods.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_label_values\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_label_values</a>(&amp;self, vals: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>]) -&gt; &lt;T as MetricVecBuilder&gt;::M</h4></section></summary><div class=\"docblock\"><p><code>with_label_values</code> works as <code>get_metric_with_label_values</code>, but panics if an error\noccurs.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>prometheus::{CounterVec, Opts};\n<span class=\"kw\">let </span>vec = CounterVec::new(\n    Opts::new(<span class=\"string\">\"requests_total\"</span>, <span class=\"string\">\"Number of requests.\"</span>),\n    <span class=\"kw-2\">&amp;</span>[<span class=\"string\">\"code\"</span>, <span class=\"string\">\"http_method\"</span>]\n).unwrap();\nvec.with_label_values(<span class=\"kw-2\">&amp;</span>[<span class=\"string\">\"404\"</span>, <span class=\"string\">\"POST\"</span>]).inc()</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with</a>(&amp;self, labels: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;) -&gt; &lt;T as MetricVecBuilder&gt;::M</h4></section></summary><div class=\"docblock\"><p><code>with</code> works as <code>get_metric_with</code>, but panics if an error occurs. The method allows\nneat syntax like:\nhttpReqs.with(Labels{“status”:“404”, “method”:“POST”}).inc()</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_label_values\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">remove_label_values</a>(&amp;self, vals: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error&gt;</h4></section></summary><div class=\"docblock\"><p><code>remove_label_values</code> removes the metric where the variable labels are the same\nas those passed in as labels (same order as the VariableLabels in Desc). It\nreturns true if a metric was deleted.</p>\n<p>It returns an error if the number of label values is not the same as the\nnumber of VariableLabels in Desc.</p>\n<p>Note that for more than one label value, this method is prone to mistakes\ncaused by an incorrect order of arguments. Consider delete(labels) as an\nalternative to avoid that type of mistake. For higher label numbers, the\nlatter has a much more readable (albeit more verbose) syntax, but it comes\nwith a performance overhead (for creating and processing the Labels map).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">remove</a>(&amp;self, labels: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error&gt;</h4></section></summary><div class=\"docblock\"><p><code>remove</code> removes the metric where the variable labels are the same as those\npassed in as labels. It returns true if a metric was deleted.</p>\n<p>It returns an error if the number and names of the Labels are inconsistent\nwith those of the VariableLabels in the Desc of the MetricVec.</p>\n<p>This method is used for the same purpose as <code>delete_label_values</code>. See\nthere for pros and cons of the two methods.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">reset</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p><code>reset</code> deletes all metrics in this vector.</p>\n</div></details></div></details>",0,"fedimint_metrics::GaugeVec","fedimint_metrics::HistogramVec","fedimint_metrics::IntCounterVec"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()