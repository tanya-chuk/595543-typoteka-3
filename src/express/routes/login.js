'use strict';

const {Router} = require(`express`);
const {RoutesNames} = require(`./constants`);

const loginRouter = new Router();
const {login} = RoutesNames;

loginRouter.get(`/`, (req, res) => res.send(login));

module.exports = loginRouter;
