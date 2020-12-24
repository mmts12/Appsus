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
            bgColor: 'rgb(246, 221, 152)',
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
            bgColor: 'rgb(246, 221, 152)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteVideo',
        isPinned: false,
        info: {
            title: 'Chillax Man',
            url: 'https://www.youtube.com/embed/CN_NPmKjWDM',
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Don\'t Forget, even though it\'s sprint time:',
            todos:
                ['Eat', 'Take a shower', 'Keep it together', 'Smile', 'Have Fun'],
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
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
            bgColor: 'rgb(246, 221, 152)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Grocery List:',
            todos: ['Milk', 'Eggs'],
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteText',
        isPinned: false,
        info: {
            txt: 'Everyone Wants To Eat, Few Are Willing To Hunt',
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
        },
    },
    {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            title: 'Best Trip Ever',
            url: 'https://i.picsum.photos/id/1035/200/300.jpg?hmac=744aBtkMLjfDyn2TzkMxsFzw2T0L57TMlNGFlX-Qgq0',
        },
        style: {
            bgColor: 'rgb(246, 221, 152)',
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
    var clonedNote = { ...foundNote };
    clonedNote.id = utilService.makeId();
    notes = [clonedNote, ...notesToEdit];
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
        case 'NoteTodos':
            var strTodos = newNote.info.todos;
            var todos = strTodos.split(',');
            newNote.info.todos = todos;
            console.log('new note', newNote);
            return notes = [newNote, ...notes];
    }
}

