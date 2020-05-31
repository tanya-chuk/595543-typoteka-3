'use strict';

const path = require(`path`);
const express = require(`express`);
const appRouter = require(`./routes`);

const DEFAULT_PORT = 8080;
const app = express();

const getDirection = (pathName) => {
  return path.join(__dirname, pathName);
};

app.set(`views`, getDirection(`templates`));
app.set(`view engine`, `pug`);

app.use(appRouter);
app.use(express.static(getDirection(`../../markup`)));

app.listen(DEFAULT_PORT,
    () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));
