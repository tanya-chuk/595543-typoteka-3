'use strict';

const fs = require(`fs`).promises;
const {HttpCode} = require(`../../constants`);

const FILENAME = `mocks.json`;
const NOT_FOUND_MESSAGE = `Not found`;

const sendResponse = (res, statusCode, message) => {
  const template = `
      <!Doctype html>
        <html lang="ru">
        <head>
          <title>With love from Node</title>
        </head>
        <body>${message}</body>
      </html>`.trim();

  res.statusCode = statusCode;
  res.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`,
  });

  res.end(template);
};

const getMessage = (content) => {
  const mocks = JSON.parse(content);
  return mocks.map(({title}) => `<li>${title}</li>`).join(``);
};

const onClientConnect = async (req, res) => {
  switch (req.url) {
    case `/`:
      try {
        const fileContent = await fs.readFile(FILENAME);
        sendResponse(res, HttpCode.OK, `<ul>${getMessage(fileContent)}</ul>`);
      } catch (err) {
        sendResponse(res, HttpCode.NOT_FOUND, NOT_FOUND_MESSAGE);
      }
      break;
    default:
      sendResponse(res, HttpCode.NOT_FOUND, NOT_FOUND_MESSAGE);
      break;
  }
};

module.exports = {
  onClientConnect
};
