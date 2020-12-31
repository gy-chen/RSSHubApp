#!/usr/bin/env node
"use strict";

const { utils, middlewares, localRSSHub } = require("../lib/");
const setting = utils.loadSetting();
const app = localRSSHub.requireRSSHubApp();

const routesMiddleware = utils.findRSSHubRoutesMiddleware(app);
const customRoutes = middlewares.loadCustomRoutes(setting);
middlewares.attachCustomRoutesTo(routesMiddleware.router, customRoutes);
middlewares.attachCustomRouters(routesMiddleware);

localRSSHub.requireRSSHubServer();
