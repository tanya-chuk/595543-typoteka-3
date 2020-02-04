'use strict';

const { Cli } = require(`./cli`);
const {
    DEFAULT_COMMAND,
    USER_ARGV_INDEX,
    EXIT_CODE
} = require(`./constants`);
const { MAX_COUNT } = require('./cli/generate/constants');

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;
const postsCount = userArguments.slice(1, USER_ARGV_INDEX);

if (userArguments.length === 0 || !Cli[userCommand]) {
    Cli[DEFAULT_COMMAND].run();
    process.exit(EXIT_CODE.SUCCESS);
}

if (postsCount > MAX_COUNT) {
    console.error(`Не больше 1000 публикаций`);
    process.exit(EXIT_CODE.ERROR);
}

Cli[userCommand].run(userArguments.slice(1));