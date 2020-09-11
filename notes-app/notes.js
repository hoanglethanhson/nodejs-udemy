const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your notes ..";

const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

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

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

const removeNote = function (title) {
    console.log('Removing note: ' + title);
    const notes = loadNotes();

    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notesToKeep.length < notes.length) {
        console.log(chalk.green('Note removed'));
    } else {
        console.log(chalk.red('Note not found'));
    }

    saveNotes(notesToKeep)
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote
}
