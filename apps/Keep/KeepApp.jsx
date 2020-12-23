import { KeepAdd } from "./cmps/KeepAdd.jsx";
import { KeepDynamicCmp } from "./cmps/KeepDynamicCmp.jsx";
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
        keepService.addNote(newNote);
        this.loadNotes();
    }
    render() {
        const { notes } = this.state;
        return (
            <section className="keep-app">

                <div className="search-area">
                    <KeepAdd addNote={this.addNote} />
                </div>

                <div className="notes-container flex wrap">
                    {notes.map((note, idx) => {
                        return <article className="note flex" key={idx}>
                            <KeepDynamicCmp currCmp={note.type} info={note.info} />
                        </article>
                    })}
                </div>
                {/* FOR DEBUGGING PORPUSES DELETE WHEN FINISH */}
                <hr />
                {/* <pre>{JSON.stringify(notes, null, 2)}</pre> */}
            </section>
        );
    }
}





