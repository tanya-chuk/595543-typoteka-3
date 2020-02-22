'use strict';

const {Router} = require(`express`);
const {RoutesNames} = require(`./constants`);

const registerRouter = new Router();
const {register} = RoutesNames;

registerRouter.get(`/`, (req, res) => res.send(register));

module.exports = registerRouter;
