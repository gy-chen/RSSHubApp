const resolveCwd = require("resolve-cwd");

module.exports = {
  requireRSSHub: () => {
    const rsshub = resolveCwd.silent("rsshub");
    if (rsshub) {
      // from installed package
      return require(rsshub);
    }
    // maybed from cloned rsshub
    return require(process.cwd() + "/lib/pkg");
  },
  requireRSSHubApp: () => {
    const rsshubApp = resolveCwd.silent("rsshub/lib/app");
    if (rsshubApp) {
      return require(rsshubApp);
    }
    return require(process.cwd() + "/lib/app");
  },
  requireRSSHubServer: () => {
    const rsshubServer = resolveCwd.silent("rsshub/lib/index");
    if (rsshubServer) {
      return require(rsshubServer);
    }
    return require(process.cwd() + "/lib/index");
  },
  requireRSSHubConfig: () => {
    const rsshubConfig = resolveCwd.silent("rsshub/lib/config");
    if (rsshubConfig) {
      return require(rsshubConfig);
    }
    return require(process.cwd() + "/lib/config");
  },
};
