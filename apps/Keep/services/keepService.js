export const keepService = {
    query,
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
            title: 'Baby Boss',
            url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F163607398944466017%2F&psig=AOvVaw3DTyCGmX8HhVe7Zn-RUW94&ust=1608812003763000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjp5PGJ5O0CFQAAAAAdAAAAABAE',
        },
        style: {
            bgColor: 'whitesmoke',
        },
    },
    {
        type: 'NoteTodos',
        isPinned: false,
        info: {
            label: 'Grocery List:',
            todos: [
                { txt: 'Milk', doneAt: null },
                { txt: 'Eggs', doneAt: 188111111 },
            ],
        },
    },
    {
        type: 'NoteVideo',
        isPinned: false,
        info: {
            title: 'Get Up Stand Up',
            url: 'https://www.youtube.com/watch?v=X2W3aG8uizA',
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