'use strict';

const {MAX_COUNT, DEFAULT_COUNT, MAX_SENTENCES, FILE_NAME} = require(`./constants`);
const {getItems, getDate, readContent} = require(`./utils`);
const {getRandomInt} = require(`../../utils`);
const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;
const {ComandNames} = require(`../../constants`);
const {ExitCode} = require(`../../constants`);

const generateOffers = (count, titles, categories, sentences) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 1)],
    createdDate: getDate(),
    announce: getItems(sentences, getRandomInt(1, MAX_SENTENCES), ` `),
    fullText: getItems(sentences, getRandomInt(0, 100), ` `),
    сategory: getItems(categories, getRandomInt(1, categories.length - 1), `, `)
  }))
);

module.exports = {
  name: ComandNames.generate,
  async run(args) {
    const [count] = args;

    if (count > MAX_COUNT) {
      console.error(chalk.red(`Не больше 1000 публикаций`));
      process.exit(ExitCode.ERROR);
    }

    const [sentences, titles, categories] = await Promise.all([
      readContent(FILE_SENTENCES_PATH),
      readContent(FILE_TITLES_PATH),
      readContent(FILE_CATEGORIES_PATH)
    ]);

    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
};
