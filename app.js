//Dependencies
const validator = require('validator');
const yargs = require('yargs');
const notesUtils = require('./notes');


yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notesUtils.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notesUtils.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing a new note',
    handler () {
        notesUtils.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notesUtils.readNote(argv.title);
    }
});
console.log(yargs.argv);

