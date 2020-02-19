'use strict';

const {DEFAULT_COUNT, MAX_SENTENCES, FILE_NAME, TITLES, SENTENCES, CATEGORIES} = require(`./constants`);
const {getItems, getDate} = require(`./utils`);
const {getRandomInt} = require(`../../utils`);
const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    createdDate: getDate(),
    announce: getItems(SENTENCES, getRandomInt(1, MAX_SENTENCES), ` `),
    fullText: getItems(SENTENCES, getRandomInt(0, 100), ` `),
    сategory: getItems(CATEGORIES, getRandomInt(1, CATEGORIES.length - 1), `, `)
  }))
);

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
};
