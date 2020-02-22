'use strict';

const {Router} = require(`express`);
const {RoutesNames} = require(`./constants`);

const myRouter = new Router();
const {my} = RoutesNames;

myRouter.get(`/`, (req, res) => res.send(my));
myRouter.get(`/comments`, (req, res) => res.send(`${my}/comments`));

module.exports = myRouter;
