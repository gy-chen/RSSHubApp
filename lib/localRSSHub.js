const resolveCwd = require("resolve-cwd");

module.exports = {
  requireRSSHub: () => require(resolveCwd("rsshub")),
  requireRSSHubApp: () => require(resolveCwd("rsshub/lib/app")),
  requireRSSHubServer: () => require(resolveCwd("rsshub/lib/index")),
};
