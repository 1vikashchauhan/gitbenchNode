// const fs = require('fs');
// const validator = require('validator')
const notes = require('./notes');
// const chalk = require('chalk');

const yargs = require('yargs')
// const log = console.log

// console.log(notes());
// console.log(validator.isEmail('vc90841gmail.com'));
// log(chalk.red('hello worlds'));
// fs.writeFileSync('note.txt','node js first file /n');
// fs.appendFileSync('note.txt','append new text')

// const parseArgument = process.argv[2];
// console.log(parseArgument);
// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'this is a title node',
            demandOption:true,
            type:String
        },
        body:{
            describe:'this is a body',
            demandOption:true,
            type:String
        }
    },

    handler: function (argv) {
        // console.log('Adding a new note!',argv.title);
        // console.log('Adding a new body!',argv.body);
        notes.addNotes(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function (argv) {
        notes.removeNotes(argv.title);
       
    }
})


yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
       notes.listNotes();
    }
})


yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function (argv) {
       notes.readCommand(argv.title);
    }
})

yargs.parse();


