// const fs = require('fs');
const validator = require('validator')
const notes = require('./notes');
const chalk = require('chalk');
const log = console.log

console.log(notes());
console.log(validator.isEmail('vc90841gmail.com'));
log(chalk.red('hello worlds'));
// fs.writeFileSync('note.txt','node js first file /n');
// fs.appendFileSync('note.txt','append new text')
