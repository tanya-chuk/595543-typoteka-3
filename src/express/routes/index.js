'use strict';

const myRouter = require(`./my`);
const offersRouter = require(`./offers`);
const {Router} = require(`express`);

const appRouter = new Router();

appRouter.get(`/`, (req, res) => res.send(`/`));
appRouter.get(`/search`, (req, res) => res.send(`/search`));
appRouter.get(`/register`, (req, res) => res.send(`/register`));
appRouter.get(`/login`, (req, res) => res.send(`/login`));
appRouter.use(`/my`, myRouter);
appRouter.use(`/offers`, offersRouter);

module.exports = appRouter;
