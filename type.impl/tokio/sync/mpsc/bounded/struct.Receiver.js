(function() {var type_impls = {
"fedimint_server":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Receiver%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Receiver&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","fedimint_server::net::peers_reliable::PeerStatusChannelReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Receiver%3CT%3E\" class=\"impl\"><a href=\"#impl-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Receiver&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.recv\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">recv</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Receives the next value for this receiver.</p>\n<p>This method returns <code>None</code> if the channel has been closed and there are\nno remaining messages in the channel’s buffer. This indicates that no\nfurther values can ever be received from this <code>Receiver</code>. The channel is\nclosed when all senders have been dropped, or when <a href=\"Self::close\"><code>close</code></a> is called.</p>\n<p>If there are no messages in the channel’s buffer, but the channel has\nnot yet been closed, this method will sleep until a message is sent or\nthe channel is closed.  Note that if <a href=\"Self::close\"><code>close</code></a> is called, but there are\nstill outstanding <a href=\"struct@crate::sync::mpsc::Permit\"><code>Permits</code></a> from before it was closed, the channel is\nnot considered closed by <code>recv</code> until the permits are released.</p>\n<h5 id=\"cancel-safety\"><a class=\"doc-anchor\" href=\"#cancel-safety\">§</a>Cancel safety</h5>\n<p>This method is cancel safe. If <code>recv</code> is used as the event in a\n<a href=\"crate::select\"><code>tokio::select!</code></a> statement and some other branch\ncompletes first, it is guaranteed that no messages were received on this\nchannel.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = mpsc::channel(<span class=\"number\">100</span>);\n\n    tokio::spawn(<span class=\"kw\">async move </span>{\n        tx.send(<span class=\"string\">\"hello\"</span>).<span class=\"kw\">await</span>.unwrap();\n    });\n\n    <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">Some</span>(<span class=\"string\">\"hello\"</span>), rx.recv().<span class=\"kw\">await</span>);\n    <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">None</span>, rx.recv().<span class=\"kw\">await</span>);\n}</code></pre></div>\n<p>Values are buffered:</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = mpsc::channel(<span class=\"number\">100</span>);\n\n    tx.send(<span class=\"string\">\"hello\"</span>).<span class=\"kw\">await</span>.unwrap();\n    tx.send(<span class=\"string\">\"world\"</span>).<span class=\"kw\">await</span>.unwrap();\n\n    <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">Some</span>(<span class=\"string\">\"hello\"</span>), rx.recv().<span class=\"kw\">await</span>);\n    <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">Some</span>(<span class=\"string\">\"world\"</span>), rx.recv().<span class=\"kw\">await</span>);\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.recv_many\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">recv_many</a>(&amp;mut self, buffer: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;, limit: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Receives the next values for this receiver and extends <code>buffer</code>.</p>\n<p>This method extends <code>buffer</code> by no more than a fixed number of values\nas specified by <code>limit</code>. If <code>limit</code> is zero, the function immediately\nreturns <code>0</code>. The return value is the number of values added to <code>buffer</code>.</p>\n<p>For <code>limit &gt; 0</code>, if there are no messages in the channel’s queue, but\nthe channel has not yet been closed, this method will sleep until a\nmessage is sent or the channel is closed. Note that if <a href=\"Self::close\"><code>close</code></a> is\ncalled, but there are still outstanding <a href=\"struct@crate::sync::mpsc::Permit\"><code>Permits</code></a> from before it was\nclosed, the channel is not considered closed by <code>recv_many</code> until the\npermits are released.</p>\n<p>For non-zero values of <code>limit</code>, this method will never return <code>0</code> unless\nthe channel has been closed and there are no remaining messages in the\nchannel’s queue. This indicates that no further values can ever be\nreceived from this <code>Receiver</code>. The channel is closed when all senders\nhave been dropped, or when <a href=\"Self::close\"><code>close</code></a> is called.</p>\n<p>The capacity of <code>buffer</code> is increased as needed.</p>\n<h5 id=\"cancel-safety-1\"><a class=\"doc-anchor\" href=\"#cancel-safety-1\">§</a>Cancel safety</h5>\n<p>This method is cancel safe. If <code>recv_many</code> is used as the event in a\n<a href=\"crate::select\"><code>tokio::select!</code></a> statement and some other branch\ncompletes first, it is guaranteed that no messages were received on this\nchannel.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>buffer: Vec&lt;<span class=\"kw-2\">&amp;</span>str&gt; = Vec::with_capacity(<span class=\"number\">2</span>);\n    <span class=\"kw\">let </span>limit = <span class=\"number\">2</span>;\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = mpsc::channel(<span class=\"number\">100</span>);\n    <span class=\"kw\">let </span>tx2 = tx.clone();\n    tx2.send(<span class=\"string\">\"first\"</span>).<span class=\"kw\">await</span>.unwrap();\n    tx2.send(<span class=\"string\">\"second\"</span>).<span class=\"kw\">await</span>.unwrap();\n    tx2.send(<span class=\"string\">\"third\"</span>).<span class=\"kw\">await</span>.unwrap();\n\n    <span class=\"comment\">// Call `recv_many` to receive up to `limit` (2) values.\n    </span><span class=\"macro\">assert_eq!</span>(<span class=\"number\">2</span>, rx.recv_many(<span class=\"kw-2\">&amp;mut </span>buffer, limit).<span class=\"kw\">await</span>);\n    <span class=\"macro\">assert_eq!</span>(<span class=\"macro\">vec!</span>[<span class=\"string\">\"first\"</span>, <span class=\"string\">\"second\"</span>], buffer);\n\n    <span class=\"comment\">// If the buffer is full, the next call to `recv_many`\n    // reserves additional capacity.\n    </span><span class=\"macro\">assert_eq!</span>(<span class=\"number\">1</span>, rx.recv_many(<span class=\"kw-2\">&amp;mut </span>buffer, <span class=\"number\">1</span>).<span class=\"kw\">await</span>);\n\n    tokio::spawn(<span class=\"kw\">async move </span>{\n        tx.send(<span class=\"string\">\"fourth\"</span>).<span class=\"kw\">await</span>.unwrap();\n    });\n\n    <span class=\"comment\">// 'tx' is dropped, but `recv_many`\n    // is guaranteed not to return 0 as the channel\n    // is not yet closed.\n    </span><span class=\"macro\">assert_eq!</span>(<span class=\"number\">1</span>, rx.recv_many(<span class=\"kw-2\">&amp;mut </span>buffer, <span class=\"number\">1</span>).<span class=\"kw\">await</span>);\n    <span class=\"macro\">assert_eq!</span>(<span class=\"macro\">vec!</span>[<span class=\"string\">\"first\"</span>, <span class=\"string\">\"second\"</span>, <span class=\"string\">\"third\"</span>, <span class=\"string\">\"fourth\"</span>], buffer);\n\n    <span class=\"comment\">// Once the last sender is dropped, the channel is\n    // closed and `recv_many` returns 0, capacity unchanged.\n    </span>drop(tx2);\n    <span class=\"macro\">assert_eq!</span>(<span class=\"number\">0</span>, rx.recv_many(<span class=\"kw-2\">&amp;mut </span>buffer, limit).<span class=\"kw\">await</span>);\n    <span class=\"macro\">assert_eq!</span>(<span class=\"macro\">vec!</span>[<span class=\"string\">\"first\"</span>, <span class=\"string\">\"second\"</span>, <span class=\"string\">\"third\"</span>, <span class=\"string\">\"fourth\"</span>], buffer);\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_recv\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">try_recv</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, TryRecvError&gt;</h4></section></summary><div class=\"docblock\"><p>Tries to receive the next value for this receiver.</p>\n<p>This method returns the <a href=\"crate::sync::mpsc::error::TryRecvError::Empty\"><code>Empty</code></a> error if the channel is currently\nempty, but there are still outstanding <a href=\"crate::sync::mpsc::Sender\">senders</a> or <a href=\"crate::sync::mpsc::Permit\">permits</a>.</p>\n<p>This method returns the <a href=\"crate::sync::mpsc::error::TryRecvError::Disconnected\"><code>Disconnected</code></a> error if the channel is\ncurrently empty, and there are no outstanding <a href=\"crate::sync::mpsc::Sender\">senders</a> or <a href=\"crate::sync::mpsc::Permit\">permits</a>.</p>\n<p>Unlike the <a href=\"Self::poll_recv\"><code>poll_recv</code></a> method, this method will never return an\n<a href=\"crate::sync::mpsc::error::TryRecvError::Empty\"><code>Empty</code></a> error spuriously.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n<span class=\"kw\">use </span>tokio::sync::mpsc::error::TryRecvError;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = mpsc::channel(<span class=\"number\">100</span>);\n\n    tx.send(<span class=\"string\">\"hello\"</span>).<span class=\"kw\">await</span>.unwrap();\n\n    <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">Ok</span>(<span class=\"string\">\"hello\"</span>), rx.try_recv());\n    <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">Err</span>(TryRecvError::Empty), rx.try_recv());\n\n    tx.send(<span class=\"string\">\"hello\"</span>).<span class=\"kw\">await</span>.unwrap();\n    <span class=\"comment\">// Drop the last sender, closing the channel.\n    </span>drop(tx);\n\n    <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">Ok</span>(<span class=\"string\">\"hello\"</span>), rx.try_recv());\n    <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">Err</span>(TryRecvError::Disconnected), rx.try_recv());\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.blocking_recv\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">blocking_recv</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Blocking receive to call outside of asynchronous contexts.</p>\n<p>This method returns <code>None</code> if the channel has been closed and there are\nno remaining messages in the channel’s buffer. This indicates that no\nfurther values can ever be received from this <code>Receiver</code>. The channel is\nclosed when all senders have been dropped, or when <a href=\"Self::close\"><code>close</code></a> is called.</p>\n<p>If there are no messages in the channel’s buffer, but the channel has\nnot yet been closed, this method will block until a message is sent or\nthe channel is closed.</p>\n<p>This method is intended for use cases where you are sending from\nasynchronous code to synchronous code, and will work even if the sender\nis not using <a href=\"fn@crate::sync::mpsc::Sender::blocking_send\"><code>blocking_send</code></a> to send the message.</p>\n<p>Note that if <a href=\"Self::close\"><code>close</code></a> is called, but there are still outstanding\n<a href=\"struct@crate::sync::mpsc::Permit\"><code>Permits</code></a> from before it was closed, the channel is not considered\nclosed by <code>blocking_recv</code> until the permits are released.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>This function panics if called within an asynchronous execution\ncontext.</p>\n<h5 id=\"examples-3\"><a class=\"doc-anchor\" href=\"#examples-3\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::thread;\n<span class=\"kw\">use </span>tokio::runtime::Runtime;\n<span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"kw\">fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = mpsc::channel::&lt;u8&gt;(<span class=\"number\">10</span>);\n\n    <span class=\"kw\">let </span>sync_code = thread::spawn(<span class=\"kw\">move </span>|| {\n        <span class=\"macro\">assert_eq!</span>(<span class=\"prelude-val\">Some</span>(<span class=\"number\">10</span>), rx.blocking_recv());\n    });\n\n    Runtime::new()\n        .unwrap()\n        .block_on(<span class=\"kw\">async move </span>{\n            <span class=\"kw\">let _ </span>= tx.send(<span class=\"number\">10</span>).<span class=\"kw\">await</span>;\n        });\n    sync_code.join().unwrap()\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.close\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">close</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Closes the receiving half of a channel without dropping it.</p>\n<p>This prevents any further messages from being sent on the channel while\nstill enabling the receiver to drain messages that are buffered. Any\noutstanding <a href=\"Permit\"><code>Permit</code></a> values will still be able to send messages.</p>\n<p>To guarantee that no messages are dropped, after calling <code>close()</code>,\n<code>recv()</code> must be called until <code>None</code> is returned. If there are\noutstanding <a href=\"Permit\"><code>Permit</code></a> or <a href=\"OwnedPermit\"><code>OwnedPermit</code></a> values, the <code>recv</code> method will\nnot return <code>None</code> until those are released.</p>\n<h5 id=\"examples-4\"><a class=\"doc-anchor\" href=\"#examples-4\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = mpsc::channel(<span class=\"number\">20</span>);\n\n    tokio::spawn(<span class=\"kw\">async move </span>{\n        <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>i = <span class=\"number\">0</span>;\n        <span class=\"kw\">while let </span><span class=\"prelude-val\">Ok</span>(permit) = tx.reserve().<span class=\"kw\">await </span>{\n            permit.send(i);\n            i += <span class=\"number\">1</span>;\n        }\n    });\n\n    rx.close();\n\n    <span class=\"kw\">while let </span><span class=\"prelude-val\">Some</span>(msg) = rx.recv().<span class=\"kw\">await </span>{\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"got {}\"</span>, msg);\n    }\n\n    <span class=\"comment\">// Channel closed and no messages are lost.\n</span>}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_closed\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_closed</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks if a channel is closed.</p>\n<p>This method returns <code>true</code> if the channel has been closed. The channel is closed\nwhen all <a href=\"crate::sync::mpsc::Sender\"><code>Sender</code></a> have been dropped, or when <a href=\"crate::sync::mpsc::Receiver::close\"><code>Receiver::close</code></a> is called.</p>\n<h5 id=\"examples-5\"><a class=\"doc-anchor\" href=\"#examples-5\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(_tx, <span class=\"kw-2\">mut </span>rx) = mpsc::channel::&lt;()&gt;(<span class=\"number\">10</span>);\n    <span class=\"macro\">assert!</span>(!rx.is_closed());\n\n    rx.close();\n\n    <span class=\"macro\">assert!</span>(rx.is_closed());\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks if a channel is empty.</p>\n<p>This method returns <code>true</code> if the channel has no messages.</p>\n<h5 id=\"examples-6\"><a class=\"doc-anchor\" href=\"#examples-6\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, rx) = mpsc::channel(<span class=\"number\">10</span>);\n    <span class=\"macro\">assert!</span>(rx.is_empty());\n\n    tx.send(<span class=\"number\">0</span>).<span class=\"kw\">await</span>.unwrap();\n    <span class=\"macro\">assert!</span>(!rx.is_empty());\n}\n</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of messages in the channel.</p>\n<h5 id=\"examples-7\"><a class=\"doc-anchor\" href=\"#examples-7\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, rx) = mpsc::channel(<span class=\"number\">10</span>);\n    <span class=\"macro\">assert_eq!</span>(<span class=\"number\">0</span>, rx.len());\n\n    tx.send(<span class=\"number\">0</span>).<span class=\"kw\">await</span>.unwrap();\n    <span class=\"macro\">assert_eq!</span>(<span class=\"number\">1</span>, rx.len());\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.capacity\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">capacity</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the current capacity of the channel.</p>\n<p>The capacity goes down when the sender sends a value by calling [<code>Sender::send</code>] or by reserving\ncapacity with [<code>Sender::reserve</code>]. The capacity goes up when values are received.\nThis is distinct from <a href=\"Receiver::max_capacity\"><code>max_capacity</code></a>, which always returns buffer capacity initially\nspecified when calling [<code>channel</code>].</p>\n<h5 id=\"examples-8\"><a class=\"doc-anchor\" href=\"#examples-8\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, <span class=\"kw-2\">mut </span>rx) = mpsc::channel::&lt;()&gt;(<span class=\"number\">5</span>);\n\n    <span class=\"macro\">assert_eq!</span>(rx.capacity(), <span class=\"number\">5</span>);\n\n    <span class=\"comment\">// Making a reservation drops the capacity by one.\n    </span><span class=\"kw\">let </span>permit = tx.reserve().<span class=\"kw\">await</span>.unwrap();\n    <span class=\"macro\">assert_eq!</span>(rx.capacity(), <span class=\"number\">4</span>);\n    <span class=\"macro\">assert_eq!</span>(rx.len(), <span class=\"number\">0</span>);\n\n    <span class=\"comment\">// Sending and receiving a value increases the capacity by one.\n    </span>permit.send(());\n    <span class=\"macro\">assert_eq!</span>(rx.len(), <span class=\"number\">1</span>);\n    rx.recv().<span class=\"kw\">await</span>.unwrap();\n    <span class=\"macro\">assert_eq!</span>(rx.capacity(), <span class=\"number\">5</span>);\n\n    <span class=\"comment\">// Directly sending a message drops the capacity by one.\n    </span>tx.send(()).<span class=\"kw\">await</span>.unwrap();\n    <span class=\"macro\">assert_eq!</span>(rx.capacity(), <span class=\"number\">4</span>);\n    <span class=\"macro\">assert_eq!</span>(rx.len(), <span class=\"number\">1</span>);\n\n    <span class=\"comment\">// Receiving the message increases the capacity by one.\n    </span>rx.recv().<span class=\"kw\">await</span>.unwrap();\n    <span class=\"macro\">assert_eq!</span>(rx.capacity(), <span class=\"number\">5</span>);\n    <span class=\"macro\">assert_eq!</span>(rx.len(), <span class=\"number\">0</span>);\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_capacity\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">max_capacity</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the maximum buffer capacity of the channel.</p>\n<p>The maximum capacity is the buffer capacity initially specified when calling\n[<code>channel</code>]. This is distinct from <a href=\"Receiver::capacity\"><code>capacity</code></a>, which returns the <em>current</em>\navailable buffer capacity: as messages are sent and received, the value\nreturned by <a href=\"Receiver::capacity\"><code>capacity</code></a> will go up or down, whereas the value\nreturned by <a href=\"Receiver::max_capacity\"><code>max_capacity</code></a> will remain constant.</p>\n<h5 id=\"examples-9\"><a class=\"doc-anchor\" href=\"#examples-9\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::sync::mpsc;\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, rx) = mpsc::channel::&lt;()&gt;(<span class=\"number\">5</span>);\n\n    <span class=\"comment\">// both max capacity and capacity are the same at first\n    </span><span class=\"macro\">assert_eq!</span>(rx.max_capacity(), <span class=\"number\">5</span>);\n    <span class=\"macro\">assert_eq!</span>(rx.capacity(), <span class=\"number\">5</span>);\n\n    <span class=\"comment\">// Making a reservation doesn't change the max capacity.\n    </span><span class=\"kw\">let </span>permit = tx.reserve().<span class=\"kw\">await</span>.unwrap();\n    <span class=\"macro\">assert_eq!</span>(rx.max_capacity(), <span class=\"number\">5</span>);\n    <span class=\"comment\">// but drops the capacity by one\n    </span><span class=\"macro\">assert_eq!</span>(rx.capacity(), <span class=\"number\">4</span>);\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_recv\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">poll_recv</a>(&amp;mut self, cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Polls to receive the next message on this channel.</p>\n<p>This method returns:</p>\n<ul>\n<li><code>Poll::Pending</code> if no messages are available but the channel is not\nclosed, or if a spurious failure happens.</li>\n<li><code>Poll::Ready(Some(message))</code> if a message is available.</li>\n<li><code>Poll::Ready(None)</code> if the channel has been closed and all messages\nsent before it was closed have been received.</li>\n</ul>\n<p>When the method returns <code>Poll::Pending</code>, the <code>Waker</code> in the provided\n<code>Context</code> is scheduled to receive a wakeup when a message is sent on any\nreceiver, or when the channel is closed.  Note that on multiple calls to\n<code>poll_recv</code> or <code>poll_recv_many</code>, only the <code>Waker</code> from the <code>Context</code>\npassed to the most recent call is scheduled to receive a wakeup.</p>\n<p>If this method returns <code>Poll::Pending</code> due to a spurious failure, then\nthe <code>Waker</code> will be notified when the situation causing the spurious\nfailure has been resolved. Note that receiving such a wakeup does not\nguarantee that the next call will succeed — it could fail with another\nspurious failure.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_recv_many\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">poll_recv_many</a>(\n    &amp;mut self,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n    buffer: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;,\n    limit: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Polls to receive multiple messages on this channel, extending the provided buffer.</p>\n<p>This method returns:</p>\n<ul>\n<li><code>Poll::Pending</code> if no messages are available but the channel is not closed, or if a\nspurious failure happens.</li>\n<li><code>Poll::Ready(count)</code> where <code>count</code> is the number of messages successfully received and\nstored in <code>buffer</code>. This can be less than, or equal to, <code>limit</code>.</li>\n<li><code>Poll::Ready(0)</code> if <code>limit</code> is set to zero or when the channel is closed.</li>\n</ul>\n<p>When the method returns <code>Poll::Pending</code>, the <code>Waker</code> in the provided\n<code>Context</code> is scheduled to receive a wakeup when a message is sent on any\nreceiver, or when the channel is closed.  Note that on multiple calls to\n<code>poll_recv</code> or <code>poll_recv_many</code>, only the <code>Waker</code> from the <code>Context</code>\npassed to the most recent call is scheduled to receive a wakeup.</p>\n<p>Note that this method does not guarantee that exactly <code>limit</code> messages\nare received. Rather, if at least one message is available, it returns\nas many messages as it can up to the given limit. This method returns\nzero only if the channel is closed (or if <code>limit</code> is zero).</p>\n<h5 id=\"examples-10\"><a class=\"doc-anchor\" href=\"#examples-10\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::task::{Context, Poll};\n<span class=\"kw\">use </span>std::pin::Pin;\n<span class=\"kw\">use </span>tokio::sync::mpsc;\n<span class=\"kw\">use </span>futures::Future;\n\n<span class=\"kw\">struct </span>MyReceiverFuture&lt;<span class=\"lifetime\">'a</span>&gt; {\n    receiver: mpsc::Receiver&lt;i32&gt;,\n    buffer: <span class=\"kw-2\">&amp;</span><span class=\"lifetime\">'a </span><span class=\"kw-2\">mut </span>Vec&lt;i32&gt;,\n    limit: usize,\n}\n\n<span class=\"kw\">impl</span>&lt;<span class=\"lifetime\">'a</span>&gt; Future <span class=\"kw\">for </span>MyReceiverFuture&lt;<span class=\"lifetime\">'a</span>&gt; {\n    <span class=\"kw\">type </span>Output = usize; <span class=\"comment\">// Number of messages received\n\n    </span><span class=\"kw\">fn </span>poll(<span class=\"kw-2\">mut </span><span class=\"self\">self</span>: Pin&lt;<span class=\"kw-2\">&amp;mut </span><span class=\"self\">Self</span>&gt;, cx: <span class=\"kw-2\">&amp;mut </span>Context&lt;<span class=\"lifetime\">'_</span>&gt;) -&gt; Poll&lt;<span class=\"self\">Self</span>::Output&gt; {\n        <span class=\"kw\">let </span>MyReceiverFuture { receiver, buffer, limit } = <span class=\"kw-2\">&amp;mut *</span><span class=\"self\">self</span>;\n\n        <span class=\"comment\">// Now `receiver` and `buffer` are mutable references, and `limit` is copied\n        </span><span class=\"kw\">match </span>receiver.poll_recv_many(cx, <span class=\"kw-2\">*</span>buffer, <span class=\"kw-2\">*</span>limit) {\n            Poll::Pending =&gt; Poll::Pending,\n            Poll::Ready(count) =&gt; Poll::Ready(count),\n        }\n    }\n}\n\n<span class=\"attr\">#[tokio::main]\n</span><span class=\"kw\">async fn </span>main() {\n    <span class=\"kw\">let </span>(tx, rx) = mpsc::channel(<span class=\"number\">32</span>);\n    <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>buffer = Vec::new();\n\n    <span class=\"kw\">let </span>my_receiver_future = MyReceiverFuture {\n        receiver: rx,\n        buffer: <span class=\"kw-2\">&amp;mut </span>buffer,\n        limit: <span class=\"number\">3</span>,\n    };\n\n    <span class=\"kw\">for </span>i <span class=\"kw\">in </span><span class=\"number\">0</span>..<span class=\"number\">10 </span>{\n        tx.send(i).<span class=\"kw\">await</span>.unwrap();\n    }\n\n    <span class=\"kw\">let </span>count = my_receiver_future.<span class=\"kw\">await</span>;\n    <span class=\"macro\">assert_eq!</span>(count, <span class=\"number\">3</span>);\n    <span class=\"macro\">assert_eq!</span>(buffer, <span class=\"macro\">vec!</span>[<span class=\"number\">0</span>,<span class=\"number\">1</span>,<span class=\"number\">2</span>])\n}</code></pre></div>\n</div></details></div></details>",0,"fedimint_server::net::peers_reliable::PeerStatusChannelReceiver"],["<section id=\"impl-Unpin-for-Receiver%3CT%3E\" class=\"impl\"><a href=\"#impl-Unpin-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for Receiver&lt;T&gt;</h3></section>","Unpin","fedimint_server::net::peers_reliable::PeerStatusChannelReceiver"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()