//Dependencies
const fs = require('fs');
const chalk = require('chalk');

// Add Notes
const addNote = (title, body) => {
    const notes = loadNotes();
    //Check for duplicates
    const duplicateNote = notes.find(note => note.title === title);

    debugger;

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.blue.inverse('Note added'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('note.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('note.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

// Remove Notes
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('Specified note not found'));
    }
};

// List Notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.inverse('Listing all notes'));

    notes.forEach(note => console.log(note.title));
}

// Read Notes
const readNote = (title) => {
    const notes = loadNotes();
    //console.log(notes);
    const foundNote = notes.find(note => note.title === title);
    if(foundNote) {
        console.log(chalk.yellow.inverse('Note Found'));
        return foundNote;
    } else {
        console.log(chalk.red.inverse('Note not found'));
        return '';
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};