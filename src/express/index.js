'use strict';

const path = require(`path`);
const express = require(`express`);
const appRouter = require(`./routes`);

const DEFAULT_PORT = 8080;
const app = express();

app.set(`views`, path.join(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(appRouter);

app.listen(DEFAULT_PORT,
    () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));
