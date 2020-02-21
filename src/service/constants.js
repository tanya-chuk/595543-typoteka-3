'use strict';

const ComandNames = {
  help: `--help`,
  version: `--version`,
  generate: `--generate`,
  server: `--server`
};

const DEFAULT_COMMAND = ComandNames.help;

const USER_ARGV_INDEX = 2;

const USER_COMMAND_INDEX = 3;

const ExitCode = {
  ERROR: 1,
  SUCCESS: 0,
};

const HttpCode = {
  OK: 200,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  USER_COMMAND_INDEX,
  ExitCode,
  HttpCode,
  ComandNames
};
