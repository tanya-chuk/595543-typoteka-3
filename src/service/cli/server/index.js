'use strict';
const chalk = require(`chalk`);
const http = require(`http`);
const {onClientConnect} = require(`./utils`);
const {ComandNames} = require(`../../constants`);

const DEFAULT_PORT = 3000;

module.exports = {
  name: ComandNames.server,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    http.createServer(onClientConnect)
    .listen(port)
    .on(`listening`, (err) => {
      if (err) {
        return console.error(chalk.red(`Ошибка при создании сервера`, err));
      }

      return console.info(chalk.green(`Ожидаю соединений на ${port}`));
    });
  }
};
