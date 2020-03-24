#!/usr/bin/env node
"use strict";

const { utils, middlewares, localRSSHub } = require("../lib/");
const rsshub = localRSSHub.requireRSSHub();
rsshub.init();

const app = localRSSHub.requireRSSHubApp();
const routesMiddleware = utils.findRSSHubRoutesMiddleware(app);
const customRouter = middlewares.createCustomRouter(routesMiddleware);
utils.replaceRSSHubRoutesMiddleware(app, customRouter.routes());

localRSSHub.requireRSSHubServer();
