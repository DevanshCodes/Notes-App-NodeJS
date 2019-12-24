let fs = require('fs');

let getnotes = function() {
    console.log("your notes..");
};



const addNote = function(title,body) {
    let notes = loadNotes();
    let duplicateNotes = notes.filter(function (note){
        return note.title === title;
    });

    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log('Note taken');
    }
    else {
        console.log('No notes were taken');
    }
    saveNotes(notes);
}

const loadNotes = function () {
    try {
        const Buffer = fs.readFileSync('notes.json');
        const dataJSON = Buffer.toString();
        return JSON.parse(dataJSON);
        }
    catch(e){
        return [];
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const removeNote = function(title) {
    notes = loadNotes();
    notesToKeep = notes.filter(function(note) {
        return note.title != title;
    })
    saveNotes(notesToKeep);
    
}


module.exports = {
    addNote: addNote,
    getnotes: getnotes,
    removeNote: removeNote
}