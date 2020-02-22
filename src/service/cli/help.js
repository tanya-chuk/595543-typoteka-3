'use strict';
const chalk = require(`chalk`);
const {ComandNames} = require(`../constants`);

module.exports = {
  name: ComandNames.help,
  run() {
    const message = `
    Программа запускает http-сервер и формирует файл с данными для API.
    Гайд:
    server <command>
      Команды:
      --version:                  выводит номер версии
      --help:                     печатает этот текст
      --generate <count>          формирует файл mocks.json
      --server <port>             запускае сервер для указанного порта
    `;

    console.log(chalk.gray(message));
  }
};
