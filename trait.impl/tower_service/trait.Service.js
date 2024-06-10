(function() {var implementors = {
"fedimint_server":[["impl&lt;S, B: Body + 'static&gt; Service&lt;Request&lt;B&gt;&gt; for <a class=\"struct\" href=\"fedimint_server/net/api/http_auth/struct.HttpAuthService.html\" title=\"struct fedimint_server::net::api::http_auth::HttpAuthService\">HttpAuthService</a>&lt;S&gt;<div class=\"where\">where\n    S: Service&lt;Request&lt;B&gt;, Response = Response&gt;,\n    S::Response: 'static,\n    S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/error/trait.Error.html\" title=\"trait core::error::Error\">StdError</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt; + 'static,\n    S::Future: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div>"]],
"ln_gateway":[["impl&lt;T, B&gt; Service&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.11/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"ln_gateway/gateway_lnrpc/gateway_lightning_server/struct.GatewayLightningServer.html\" title=\"struct ln_gateway::gateway_lnrpc::gateway_lightning_server::GatewayLightningServer\">GatewayLightningServer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"ln_gateway/gateway_lnrpc/gateway_lightning_server/trait.GatewayLightning.html\" title=\"trait ln_gateway::gateway_lnrpc::gateway_lightning_server::GatewayLightning\">GatewayLightning</a>,\n    B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.6/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    B::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.6/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"https://docs.rs/tonic/0.11.0/tonic/codegen/type.StdError.html\" title=\"type tonic::codegen::StdError\">StdError</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()