/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverDependenciesToBundle: [
    "@apollo/client",
    "tslib",
    "ts-invariant",
    "@wry/trie",
    "zen-observable-ts",
    "symbol-observable",
    "@wry/equality",
    "optimism",
    "@wry/context",
    "graphql-tag",
    "@apollo/client/react/ssr",
  ],
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
