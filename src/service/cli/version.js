'use strict';

const chalk = require(`chalk`);
const packageJsonFile = require(`../../../package.json`);
const {ComandNames} = require(`../constants`);

module.exports = {
  name: ComandNames.version,
  run() {
    const version = packageJsonFile.version;
    console.info(chalk.blue(version));
  }
};
