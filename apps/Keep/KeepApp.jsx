import { KeepAdd } from "./cmps/KeepAdd.jsx";
import { KeepList } from "./cmps/KeepList.jsx";
import { keepService } from "./services/keepService.js";
import { NoteEdit } from "./cmps/notes/NoteEdit.jsx";
import { KeepSearch } from "./cmps/KeepSearch.jsx";

export class KeepApp extends React.Component {

    state = {
        notes: [],
        modalDisplay: 'none',
        searchBy: '',
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
        this.setState({ modalDisplay: 'block' });
        NoteEdit.editNote(noteId);
        // keepService.editNote(noteId);
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

    searchNote = (value) => {
        const { searchBy } = this.state;
        this.setState({ searchBy: value }, () => console.log('searching', searchBy));
        const filterRegex = new RegExp(searchBy, 'i');
        var fileredNotes = this.state.notes;
        fileredNotes.filter(note => filterRegex.test(note.info.title));
        console.log(fileredNotes);
        this.setState({ notes: fileredNotes });
        this.loadNotes();//WILL NOT WORK NEED TO ESTABLISH STATE
    }

    render() {
        const { notes, modalDisplay } = this.state;
        if (!notes || !notes.length) return <h1>Loading...</h1>;
        return (
            <section className="keep-app">
                <KeepSearch searchNote={this.searchNote} />
                <div className="add-area">
                    <KeepAdd addNote={this.addNote} />
                </div>

                <div className="notes-container flex wrap">
                    <KeepList notes={notes} onDeleteNote={this.deleteNote} onPinnNote={this.pinnNote}
                        onEditNote={this.editNote} onChangeBgcNote={this.changeBgcNote} onCloneNote={this.cloneNote} />
                </div>
                <NoteEdit display={modalDisplay} />
                {/* FOR DEBUGGING PORPUSES DELETE WHEN FINISH */}
                <hr />
                <pre>{JSON.stringify(notes, null, 2)}</pre>
            </section>
        );
    }
}





