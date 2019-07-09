#!/usr/bin/env node
const pkg = require(`${process.cwd()}/package.json`);
const messages = require('./messages');

const url =
  process.argv[2] ||
  '\u001B[31m...this developer would rather remain poor\u001b[39m';

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

(async () => {
  const msgFn = getRandomMessage();
  const msg = await msgFn(pkg.name, url);
  console.log(msg);
})();
