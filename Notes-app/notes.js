const fs = require('fs')
const chalk = require('chalk');
const  getNotes = () => {
    return 'yourNotes'
}

const addNotes = (title,body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title);
    if(duplicateNotes) {
        console.log('load is exist already')
    }
    else {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
    }
 

}

const loadNotes = () => {
    try{
     const file =fs.readFileSync('notes.json')
     const databuffer = file.toString();
     return (JSON.parse(databuffer));

    } catch {
        return []
    }

}

const removeNotes =(title) => {
    const notes = loadNotes();
    const removeNotesData = notes.filter((note) => note.title !== title)
    if(notes.length === removeNotesData.length) {
        console.log(chalk.red('no node remove'))
    } else {
        console.log(chalk.green('node remove'))
    }
    saveNotes(removeNotesData);
}

const saveNotes = (notes) => {
 const stringfyData = JSON.stringify(notes);
 fs.writeFileSync('notes.json',stringfyData);

}
const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(chalk.green(element.title));
    });
   
   }
const readCommand = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.green(note.title))
        console.log(chalk.yellow(note.body))
    } else {
        console.log(chalk.red.inverse('not found'))
    }

}
module.exports = {
    addNotes:addNotes,
    loadNotes:loadNotes,
    saveNotes:saveNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readCommand:readCommand
}