'use strict';

const chalk = require(`chalk`);
const fs = require(`fs`).promises;
const {getRandomInt, shuffle} = require(`../../utils`);

const PERIOD = 90 * 24 * 60 * 60 * 1000;

const getItems = (source, max, divider) => {
  return shuffle(source).slice(0, max).join(divider);
};

const getDate = () => {
  const currentDate = new Date().getTime();
  const date = new Date(currentDate - getRandomInt(0, PERIOD));

  return date.toLocaleDateString();
};

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return process.exit(1);
  }
};

module.exports = {
  getItems,
  getDate,
  readContent
};
