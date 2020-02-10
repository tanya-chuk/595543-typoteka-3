const { getRandomInt, shuffle } = require('../../utils');

const PERIOD = 90 * 24 * 60 * 60 * 1000;

const getItems = (source, max, divider) => {
    return shuffle(source).slice(0, max).join(divider)
}

const getDate = () => {
    const currentDate = new Date().getTime();
    const date = new Date(currentDate - getRandomInt(0, PERIOD));

    return date.toLocaleDateString();
};

module.exports = {
    getItems,
    getDate
}