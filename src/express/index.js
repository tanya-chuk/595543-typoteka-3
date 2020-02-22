'use strict';

const express = require(`express`);
const DEFAULT_PORT = 8080;
const myRouter = require(`./routes/my`);
const offersRouter = require(`./routes/offers`);
const searchRouter = require(`./routes/search`);
const registerRouter = require(`./routes/register`);
const loginRouter = require(`./routes/login`);
const {RoutesNames} = require(`./routes/constants`);

const {my, offers, search, register, login} = RoutesNames;
const app = express();

app.get(`/`, (req, res) => res.send(`/`));
app.use(my, myRouter);
app.use(offers, offersRouter);
app.use(search, searchRouter);
app.use(register, registerRouter);
app.use(login, loginRouter);

app.listen(DEFAULT_PORT,
    () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));
