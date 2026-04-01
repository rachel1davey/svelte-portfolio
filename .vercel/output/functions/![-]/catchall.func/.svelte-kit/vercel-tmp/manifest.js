export const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.B6gtCUJe.js",app:"_app/immutable/entry/app.DnIjxYY1.js",imports:["_app/immutable/entry/start.B6gtCUJe.js","_app/immutable/chunks/BnwaEyC7.js","_app/immutable/chunks/CAfVH3DI.js","_app/immutable/chunks/0-K4UMgB.js","_app/immutable/entry/app.DnIjxYY1.js","_app/immutable/chunks/CAfVH3DI.js","_app/immutable/chunks/gbAgswti.js","_app/immutable/chunks/CJ20uWhY.js","_app/immutable/chunks/0-K4UMgB.js","_app/immutable/chunks/C9QumMjr.js","_app/immutable/chunks/l1iiLb0b.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
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
