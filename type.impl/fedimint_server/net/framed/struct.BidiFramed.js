(function() {
    var type_impls = Object.fromEntries([["fedimint_server",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BidiFramed%3CT,+WH,+RH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#69-98\">Source</a><a href=\"#impl-BidiFramed%3CT,+WH,+RH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, WH, RH&gt; <a class=\"struct\" href=\"fedimint_server/net/framed/struct.BidiFramed.html\" title=\"struct fedimint_server::net::framed::BidiFramed\">BidiFramed</a>&lt;T, WH, RH&gt;<div class=\"where\">where\n    WH: AsyncWrite,\n    RH: AsyncRead,\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#79-88\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fedimint_server/net/framed/struct.BidiFramed.html#tymethod.new\" class=\"fn\">new</a>&lt;S&gt;(stream: S) -&gt; <a class=\"struct\" href=\"fedimint_server/net/framed/struct.BidiFramed.html\" title=\"struct fedimint_server::net::framed::BidiFramed\">BidiFramed</a>&lt;T, WriteHalf&lt;S&gt;, ReadHalf&lt;S&gt;&gt;<div class=\"where\">where\n    S: AsyncRead + AsyncWrite,</div></h4></section></summary><div class=\"docblock\"><p>Builds a new <code>BidiFramed</code> codec around a stream <code>stream</code>.</p>\n<p>See <a href=\"fedimint_server/net/framed/struct.BidiFramed.html#method.new_from_tcp\" title=\"associated function fedimint_server::net::framed::BidiFramed::new_from_tcp\"><code>TcpBidiFramed::new_from_tcp</code></a> for a more efficient version in case\nthe stream is a tokio TCP stream.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.borrow_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#95-97\">Source</a><h4 class=\"code-header\">pub fn <a href=\"fedimint_server/net/framed/struct.BidiFramed.html#tymethod.borrow_parts\" class=\"fn\">borrow_parts</a>(\n    &amp;mut self,\n) -&gt; (&amp;mut <a class=\"type\" href=\"fedimint_server/net/framed/type.FramedSink.html\" title=\"type fedimint_server::net::framed::FramedSink\">FramedSink</a>&lt;WH, T&gt;, &amp;mut <a class=\"type\" href=\"fedimint_server/net/framed/type.FramedStream.html\" title=\"type fedimint_server::net::framed::FramedStream\">FramedStream</a>&lt;RH, T&gt;)</h4></section></summary><div class=\"docblock\"><p>Splits the codec in its sending and receiving parts</p>\n<p>This can be useful in cases where potentially simultaneous read and\nwrite operations are required. Otherwise a we would need a mutex to\nguard access.</p>\n</div></details></div></details>",0,"fedimint_server::net::framed::TcpBidiFramed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BidiFramed%3CT,+WH,+RH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#57\">Source</a><a href=\"#impl-Debug-for-BidiFramed%3CT,+WH,+RH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, WH: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, RH: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"fedimint_server/net/framed/struct.BidiFramed.html\" title=\"struct fedimint_server::net::framed::BidiFramed\">BidiFramed</a>&lt;T, WH, RH&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#57\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","fedimint_server::net::framed::TcpBidiFramed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FramedTransport%3CT%3E-for-BidiFramed%3CT,+WH,+RH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#156-171\">Source</a><a href=\"#impl-FramedTransport%3CT%3E-for-BidiFramed%3CT,+WH,+RH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, WH, RH&gt; <a class=\"trait\" href=\"fedimint_server/net/framed/trait.FramedTransport.html\" title=\"trait fedimint_server::net::framed::FramedTransport\">FramedTransport</a>&lt;T&gt; for <a class=\"struct\" href=\"fedimint_server/net/framed/struct.BidiFramed.html\" title=\"struct fedimint_server::net::framed::BidiFramed\">BidiFramed</a>&lt;T, WH, RH&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    WH: AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    RH: AsyncRead + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.borrow_split\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#162-170\">Source</a><a href=\"#method.borrow_split\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fedimint_server/net/framed/trait.FramedTransport.html#tymethod.borrow_split\" class=\"fn\">borrow_split</a>(\n    &amp;mut self,\n) -&gt; (&amp;mut (dyn Sink&lt;T, Error = <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.95/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>), &amp;mut (dyn Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.95/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>))</h4></section></summary><div class='docblock'>Split the framed transport into read and write half</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_dyn\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#34-39\">Source</a><a href=\"#method.into_dyn\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fedimint_server/net/framed/trait.FramedTransport.html#method.into_dyn\" class=\"fn\">into_dyn</a>(self) -&gt; <a class=\"type\" href=\"fedimint_server/net/framed/type.AnyFramedTransport.html\" title=\"type fedimint_server::net::framed::AnyFramedTransport\">AnyFramedTransport</a>&lt;T&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,</div></h4></section></summary><div class='docblock'>Transforms concrete <code>FramedTransport</code> object into an owned trait object</div></details></div></details>","FramedTransport<T>","fedimint_server::net::framed::TcpBidiFramed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sink%3CT%3E-for-BidiFramed%3CT,+WH,+RH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#118-141\">Source</a><a href=\"#impl-Sink%3CT%3E-for-BidiFramed%3CT,+WH,+RH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, WH, RH&gt; Sink&lt;T&gt; for <a class=\"struct\" href=\"fedimint_server/net/framed/struct.BidiFramed.html\" title=\"struct fedimint_server::net::framed::BidiFramed\">BidiFramed</a>&lt;T, WH, RH&gt;<div class=\"where\">where\n    WH: AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    RH: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#124\">Source</a><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.95/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a></h4></section></summary><div class='docblock'>The type of value produced by the sink when an error occurs.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_ready\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#126-128\">Source</a><a href=\"#method.poll_ready\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">poll_ready</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut Self&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Self::Error&gt;&gt;</h4></section></summary><div class='docblock'>Attempts to prepare the <code>Sink</code> to receive a value. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_send\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#130-132\">Source</a><a href=\"#method.start_send\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">start_send</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut Self&gt;, item: T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Self::Error&gt;</h4></section></summary><div class='docblock'>Begin the process of sending a value to the sink.\nEach call to this function must be preceded by a successful call to\n<code>poll_ready</code> which returned <code>Poll::Ready(Ok(()))</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_flush\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#134-136\">Source</a><a href=\"#method.poll_flush\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">poll_flush</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut Self&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Self::Error&gt;&gt;</h4></section></summary><div class='docblock'>Flush any remaining output from this sink. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_close\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#138-140\">Source</a><a href=\"#method.poll_close\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">poll_close</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut Self&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Self::Error&gt;&gt;</h4></section></summary><div class='docblock'>Flush any remaining output and close this sink, if necessary. <a>Read more</a></div></details></div></details>","Sink<T>","fedimint_server::net::framed::TcpBidiFramed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Stream-for-BidiFramed%3CT,+WH,+RH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#143-154\">Source</a><a href=\"#impl-Stream-for-BidiFramed%3CT,+WH,+RH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, WH, RH&gt; Stream for <a class=\"struct\" href=\"fedimint_server/net/framed/struct.BidiFramed.html\" title=\"struct fedimint_server::net::framed::BidiFramed\">BidiFramed</a>&lt;T, WH, RH&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,\n    WH: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    RH: AsyncRead + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#149\">Source</a><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Item</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.95/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Values yielded by the stream.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_next\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fedimint_server/net/framed.rs.html#151-153\">Source</a><a href=\"#method.poll_next\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">poll_next</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut Self&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self::Item&gt;&gt;</h4></section></summary><div class='docblock'>Attempt to pull out the next value of this stream, registering the\ncurrent task for wakeup if the value is not yet available, and returning\n<code>None</code> if the stream is exhausted. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;)</h4></section></summary><div class='docblock'>Returns the bounds on the remaining length of the stream. <a>Read more</a></div></details></div></details>","Stream","fedimint_server::net::framed::TcpBidiFramed"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[20344]}