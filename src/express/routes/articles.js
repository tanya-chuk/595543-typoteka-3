'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/add`, (req, res) => res.render(`pages/new-post`));
articlesRouter.get(`/category/:id`, (req, res) => res.render(`pages/articles-by-category`));
articlesRouter.get(`/edit/:id`, (req, res) => res.send(`/offers/edit/:id ${req.params.id}`));
articlesRouter.get(`/:id`, (req, res) => res.render(`pages/post`));

module.exports = articlesRouter;
