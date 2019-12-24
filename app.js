const fs = require('fs');
const notes = require('./notes');
let validator = require('validator');
let yargs = require('yargs');
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
    handler: function () {
        console.log('reading a note!')
    }
})

yargs.command({
    command: 'list',
    description: 'list the note!',
    handler: function () {
        console.log('listing a note!')
    }
})

console.log(yargs.argv)