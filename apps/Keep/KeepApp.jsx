import { KeepAdd } from "./cmps/KeepAdd.jsx";
import { KeepList } from "./cmps/KeepList.jsx";
import { keepService } from "./services/keepService.js";

export class KeepApp extends React.Component {

    state = {
        note: {
            type: '',
            isPinned: false,
            info: '',
            style: 'whitesmoke',
        },
        notes: [],
    };

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        const notes = keepService.query()
        this.setState({ notes });
    }

    addNote = (newNote) => {
        console.log('father got', newNote);
        keepService.addNote(newNote);
        this.loadNotes();
    }

    deleteNote = (noteId) => {
        keepService.deleteNote(noteId);
        this.loadNotes();
    }

    pinnNote = (noteId) => {
        keepService.pinnNote(noteId);
        this.loadNotes();
    }

    editNote = (noteId) => {
        keepService.editNote(noteId);
        this.loadNotes();
    }

    changeBgcNote = (noteId, color) => {
        keepService.changeBgcNote(noteId, color);
        this.loadNotes();
    }

    cloneNote = (noteId) => {
        keepService.cloneNote(noteId);
        this.loadNotes();
    }

    render() {
        const { notes } = this.state;
        if (!notes || !notes.length) return <h1>Loading...</h1>;
        return (
            <section className="keep-app">

                <div className="search-area">
                    <KeepAdd addNote={this.addNote} />
                </div>

                <div className="notes-container grid">
                    <KeepList notes={notes} onDeleteNote={this.deleteNote} onPinnNote={this.pinnNote}
                        onEditNote={this.editNote} onChangeBgcNote={this.changeBgcNote} onCloneNote={this.cloneNote} />
                </div>
                {/* FOR DEBUGGING PORPUSES DELETE WHEN FINISH */}
                <hr />
                <pre>{JSON.stringify(notes, null, 2)}</pre>
            </section>
        );
    }
}





