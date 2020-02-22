'use strict';

const {Router} = require(`express`);
const {RoutesNames} = require(`./constants`);

const searchRouter = new Router();
const {search} = RoutesNames;

searchRouter.get(`/`, (req, res) => res.send(search));

module.exports = searchRouter;
