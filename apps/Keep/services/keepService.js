import { utilService } from '../../../services/utilService.js';

export const keepService = {
    query,
    deleteNote,
    pinnNote,
    editNote,
    changeBgcNote,
    cloneNote,
    addNote,
}

var notes = [
    {
        id: utilService.makeId(),
        type: 'NoteText',
        isPinned: false,
        info: {
            txt: 'Whether You Think You Can Or Can\'t, You Are Right!',
        },
        style: {
            bgColor: 'whitesmoke',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Venice',
            url: 'https://i.picsum.photos/id/164/200/200.jpg?hmac=UA4QhIt441pdFJ6Uam2yCxzda_KjWgQgy8fYs_-NFEM',
        },
        style: {
            bgColor: 'whitesmoke',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Grocery List:',
            todos: [
                { txt: 'Milk', doneAt: null },
                { txt: 'Eggs', doneAt: 188111111 },
            ],
        },
        style: {
            bgColor: 'whitesmoke',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteVideo',
        isPinned: false,
        info: {
            title: 'Stop Procratinating',
            url: 'https://www.youtube.com/embed/_OQXFvOvEMA',
        },
        style: {
            bgColor: 'whitesmoke',
        },
    },
]

function query() {
    return notes;
}

function deleteNote(id) {
    // console.log('service got id', id);
    var notesToEdit = notes;
    const filteredNotes = notesToEdit.filter(note => { return note.id !== id });
    // console.log('filtered notes in service', filteredNotes);
    notes = filteredNotes;
    return notes;
}

function pinnNote(id) {
    // console.log('service got id', id);
    var notesToEdit = notes;
    const foundNote = notesToEdit.findIndex(note => note.id === id);
    notesToEdit[foundNote].isPinned = true;
    const pinnedNote = notesToEdit[foundNote];
    const filteredNotes = notesToEdit.filter(note => { return note.id !== id });
    notes = [pinnedNote, ...filteredNotes];
    return notes;
}

function editNote(id) {
    console.log('service got id', id);
}

function changeBgcNote(id, color) {
    var notesToEdit = notes;
    const foundNote = notesToEdit.findIndex(note => note.id === id);
    console.log('note to chande', notesToEdit[foundNote]);
    notesToEdit[foundNote].style.bgColor = color;
    notes = notesToEdit;
    return notes;
}

function cloneNote(id) {
    var notesToEdit = notes;
    const foundNote = notesToEdit.find(note => note.id === id);
    notes = [foundNote, ...notesToEdit];
}

function addNote(note) {
    // console.log('service got note', note);
    const newNote = {
        id: utilService.makeId(),
        ...note,
    }
    let noteToAdd = null;
    switch (newNote.type) {
        case 'NoteText':
            console.log('new note', newNote);
            noteToAdd = { ...newNote };
            return notes = [noteToAdd, ...notes];
        case 'NoteImg':
            console.log('new note', newNote);
            noteToAdd = { ...newNote };
            return notes = [noteToAdd, ...notes];
        case 'NoteVideo':
            console.log('new note', newNote);
            noteToAdd = { ...newNote };
            return notes = [noteToAdd, ...notes];
        case 'NoteList':
            console.log('new note', newNote);
            noteToAdd = { ...newNote };
            return notes = [noteToAdd, ...notes];
    }
}

