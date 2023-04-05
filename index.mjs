#!/usr/bin/env node
import { readFile } from 'fs/promises';
import {messages} from './messages.mjs';

const pkg = JSON.parse(
  await readFile(
    new URL('./package.json', import.meta.url)
  )
);

const url =
  process.argv[2] ||
  '\u001B[31m...this developer would rather remain poor\u001b[39m';

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

const msgFn = getRandomMessage();
const msg = await msgFn(pkg.name, url);
console.log(msg);