const fs = require("fs");

const attachCustomRouters = (routesMiddleware) => {
  // find custom routers, see: https://github.com/DIYgod/RSSHub/blob/master/lib/router.js
  const customRoutesPath = process.cwd() + "/custom-routes";
  if (!fs.existsSync(customRoutesPath)) {
    return;
  }

  const RouterPath = require("require-all")({
    dirname: process.cwd() + "/custom-routes",
    filter: /^.*router([-_]custom[s]?)?\.js$/,
  });

  for (const project in RouterPath) {
    for (const routerName in RouterPath[project]) {
      const proRouter = RouterPath[project][routerName]();
      proRouter.stack.forEach((nestedLayer) => {
        routesMiddleware.router.stack.unshift(nestedLayer);
      });
    }
  }
};

const loadCustomRoutes = (setting) => {
  const customRoutes = {};
  for (let routeKey in setting.routes) {
    customRoutes[routeKey] = require(`${process.cwd()}/${
      setting.routes[routeKey]
    }`);
  }
  return customRoutes;
};

const attachCustomRoutesTo = (router, customRoutes) => {
  for (let route in customRoutes) {
    router.get(route, customRoutes[route]);
  }
};

module.exports = {
  attachCustomRouters,
  loadCustomRoutes,
  attachCustomRoutesTo,
};
