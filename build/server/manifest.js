const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.PPEp23rV.js",app:"_app/immutable/entry/app.BK7cottu.js",imports:["_app/immutable/entry/start.PPEp23rV.js","_app/immutable/chunks/D9JS1Wmc.js","_app/immutable/chunks/CAfVH3DI.js","_app/immutable/chunks/0-K4UMgB.js","_app/immutable/entry/app.BK7cottu.js","_app/immutable/chunks/CAfVH3DI.js","_app/immutable/chunks/gbAgswti.js","_app/immutable/chunks/CJ20uWhY.js","_app/immutable/chunks/0-K4UMgB.js","_app/immutable/chunks/C9QumMjr.js","_app/immutable/chunks/l1iiLb0b.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CsqKwZ_v.js')),
			__memo(() => import('./chunks/1-BGb6Q28h.js')),
			__memo(() => import('./chunks/2-C9ukH7vC.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
