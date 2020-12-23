export const keepService = {
    query,
    addNote,
}

var notes = [
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

function addNote(note) {
    if (note.type === 'NoteText') {
        const txt = note.info;
        note.info = { txt };
    } else if (note.type === 'NoteImg' || 'NoteVideo') {
        const url = note.info;
        note.info = { url };
    } else if (note.type === 'NoteList') {
        const todos = (note.info).split();
        console.log('todos',todos);
        // note.info = { todos };
    }
    const noteToAdd = { ...note };
    notes = [noteToAdd, ...notes];
}