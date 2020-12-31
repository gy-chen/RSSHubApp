const isRSSHubRoutesMiddleware = (middleware) => !!middleware.router;

const findRSSHubRoutesMiddleware = (app) => {
  for (let i = 0; i < app.middleware.length; i++) {
    const middleware = app.middleware[i];
    if (isRSSHubRoutesMiddleware(middleware)) {
      return middleware;
    }
  }
  throw new Error("Cannot find RSSHub routes middleware");
};

const replaceRSSHubRoutesMiddleware = (app, newRoutesMiddleware) => {
  for (let i = 0; i < app.middleware.length; i++) {
    const middleware = app.middleware[i];
    if (isRSSHubRoutesMiddleware(middleware)) {
      app.middleware[i] = newRoutesMiddleware;
      return;
    }
  }
  throw new Error("Cannot find RSSHub routes middleware");
};

const loadSetting = (defaultSetting = {}) => {
  try {
    return require(process.cwd() + "/setting.json");
  } catch (e) {
    return defaultSetting;
  }
};

module.exports = {
  findRSSHubRoutesMiddleware,
  replaceRSSHubRoutesMiddleware,
  loadSetting,
};
