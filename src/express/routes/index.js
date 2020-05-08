'use strict';

const myRouter = require(`./my`);
const articlesRouter = require(`./articles`);
const {Router} = require(`express`);

const appRouter = new Router();

appRouter.get(`/`, (req, res) => res.render(`pages/main`));
appRouter.get(`/search`, (req, res) => res.render(`pages/search`));
appRouter.get(`/register`, (req, res) => res.render(`pages/sign-up`));
appRouter.get(`/login`, (req, res) => res.render(`pages/login`));
appRouter.get(`/categories`, (req, res) => res.render(`pages/all-categories`));
appRouter.use(`/my`, myRouter);
appRouter.use(`/articles`, articlesRouter);

module.exports = appRouter;
