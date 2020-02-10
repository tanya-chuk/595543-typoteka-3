const { DEFAULT_COUNT, MAX_SENTENCES, FILE_NAME, TITLES, SENTENCES, CATEGORIES } = require('./constants');
const { getItems, getDate } = require('./utils');
const { getRandomInt } = require('../../utils');
const fs = require(`fs`);

const generateOffers = (count) => (
    Array(count).fill({}).map(() => ({
        title: TITLES[getRandomInt(0, TITLES.length - 1)],
        createdDate: getDate(),
        announce: getItems(SENTENCES, getRandomInt(1, MAX_SENTENCES), ' '),
        fullText: getItems(SENTENCES, getRandomInt(0, 100), ' '),
        сategory: getItems(CATEGORIES, getRandomInt(1, CATEGORIES.length - 1), ', ')
    }))
)

module.exports = {
    name: '--generate',
    run(args) {
        const [count] = args;
        const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
        const content = JSON.stringify(generateOffers(countOffer));

        fs.writeFile(FILE_NAME, content, (err) => {
            if (err) {
                return console.error(`Can't write data to file...`);
            }
            return console.info(`Operation success. File created.`);
        });
    }
}