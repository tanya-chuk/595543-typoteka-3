'use strict';

const {cli} = require(`./cli`);
const chalk = require(`chalk`);
const {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode
} = require(`./constants`);
const {MAX_COUNT} = require(`./cli/generate/constants`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;
const postsCount = userArguments.slice(1, USER_ARGV_INDEX);

if (userArguments.length === 0 || !cli[userCommand]) {
  cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.SUCCESS);
}

if (postsCount > MAX_COUNT) {
  console.error(chalk.red(`Не больше 1000 публикаций`));
  process.exit(ExitCode.ERROR);
}

cli[userCommand].run(userArguments.slice(1));
