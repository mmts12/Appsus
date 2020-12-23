export const keepService = {
    query,
    addNote,
}

let notes = [
    {
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
        type: 'NoteVideo',
        isPinned: false,
        info: {
            title: 'Get Up Stand Up',
            url: 'https://www.youtube.com/embed/X2W3aG8uizA',
        },
        style: {
            bgColor: 'whitesmoke',
        },
    },
]

window.theNotes = notes;  //DEBUGGING. REMOVE WHEN FINISH

function query() {
    return notes;
}

function addNote(note) {
    const noteToAdd = {
        type: { note },
        isPinned: false,
        info: {
            note
        },
        style: {
            bgColor: 'whiteSmoke',
        }
    }
    notes = [noteToAdd, notes]
    console.log('adding note:', notes);
}