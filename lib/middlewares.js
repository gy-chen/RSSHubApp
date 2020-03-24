const createCustomRouter = (routesMiddleware) => {
  // find custom routers, see: https://github.com/DIYgod/RSSHub/blob/master/lib/router.js
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

  return routesMiddleware.router;
};

module.exports = {
  createCustomRouter,
};
