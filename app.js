const fs = require('fs');
const notes = require('./notes');
let validator = require('validator');
let yargs = require('yargs');
let chalk = require('chalk');
// fs.appendFileSync('notes.txt',' This is the second append!');
// let mynotes = fs.readFileSync('notes.txt','utf8');

// console.log(mynotes);
// console.log(validator.isURL("example.com"));

// notes();

yargs.command({
    command: 'add',
    description: 'Add the note!',
    builder: {
        title: {
            describe: "Adds the title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Adds the body",
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        console.log('Title is: ' + argv.title + ' and Body: ' + argv.body)
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    description: 'remove the note!',
    builder: {
        title:{
                describe: 'Takes the title of the note which is to be removed.',
                demandOption: true,
                type: 'string',
        }
    },
    handler: function (argv) {
        console.log('removing a note!');
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'read',
    description: 'read the note!',
    builder:{
        title:{
            describe: 'Takes the title which is to be read.',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        notes.readNotes(argv.title);

    }
})

yargs.command({
    command: 'list',
    description: 'list the note!',
    handler: function () {
        console.log(chalk.green.inverse('Your List!'));
        notes.listNotes();
    }
})

console.log(yargs.argv)