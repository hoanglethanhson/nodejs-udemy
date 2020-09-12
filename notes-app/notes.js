const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your notes ..";

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
    } else {
        console.log('Note title taken!')
    }

}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

const removeNote = (title) => {
    console.log('Removing note: ' + title);
    const notes = loadNotes();

    const notesToKeep = notes.filter(note => note.title !== title)

    if (notesToKeep.length < notes.length) {
        console.log(chalk.green('Note removed'));
    } else {
        console.log(chalk.red('Note not found'));
    }

    saveNotes(notesToKeep)
}

const listNotes = () => {
    console.log(chalk.inverse('Listing notes: '));
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes
}
