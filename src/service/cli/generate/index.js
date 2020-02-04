'use strict';

const { DEFAULT_COUNT, MAX_COUNT, MAX_SENTENCES, FILE_NAME, TITLES, SENTENCES, CATEGORIES } = require('./constants');
const { getItems, getDate } = require('./utils');
const { getRandomInt } = require('../../utils');
const fs = require(`fs`);

const RANDOM_INT = Math.floor(Math.random() * 100);

const generateOffers = (count) => (
    Array(count).fill({}).map(() => ({
        title: TITLES[getRandomInt(0, TITLES.length - 1)],
        createdDate: getDate(),
        announce: getItems(SENTENCES, MAX_SENTENCES, ' '),
        fullText: getItems(SENTENCES, RANDOM_INT, ' '),
        сategory: getItems(CATEGORIES, getRandomInt(1, CATEGORIES.length - 1), ', ')
    }))
)

module.exports = {
    name: '--generate',
    run(args) {
        const [count] = args;
        const countOffer = Number.parseInt(count, MAX_COUNT) || DEFAULT_COUNT;
        const content = JSON.stringify(generateOffers(countOffer));

        fs.writeFile(FILE_NAME, content, (err) => {
            if (err) {
                return console.error(`Can't write data to file...`);
            }

            return console.info(`Operation success. File created.`);
        });
    }
}