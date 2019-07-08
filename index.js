#!/usr/bin/env node
let package = require(process.cwd() + "/package.json");

let url =
  process.argv[2] ||
  "\u001B[31m...this developer would rather remain poor\u001b[39m";
let phrases = [
  `Do you like ${package.name}? Then pay up ${url}`,
  `Are you enjoying ${package.name}? 
  
  Well im not. 
  
  I'm 6 months behind on my car payments
  
  Help Me ${url}
  `
];

const output = `
  ${phrases[Math.floor(Math.random() * phrases.length)]}
`;

console.log(output);
