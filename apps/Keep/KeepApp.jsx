import { KeepDynamicCmp } from "./cmps/KeepDynamicCmp.jsx";
import { keepService } from "./services/keepService.js";

export class KeepApp extends React.Component {

    state = {
        search: '',
        notes: [],
    };

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        const notes = keepService.query()
        this.setState({ notes });
    }

    onInputChange = (ev) => {
        const value = ev.target.value;
        this.setState({ search: value });
    }

    onAdd = (ev) => {
        ev.preventDefault();
        const note = this.state.search;
        keepService.addNote(note);
        this.setState({ search: '' });
    }

    render() {
        const { notes } = this.state;
        return (
            <section className="keep-app">
                <div className="search-area">
                    <form onSubmit={this.onAdd}>
                        <input
                            type="text"
                            value={this.state.search}
                            autoFocus
                            placeholder="What's on your mind.."
                            onChange={this.onInputChange}
                        />
                        <i className="fas fa-font"></i>
                        <i className="far fa-image"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fas fa-volume-up"></i>
                        <i className="fas fa-list-ul"></i>
                    </form>
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
                <pre>{JSON.stringify(notes, null, 2)}</pre>
            </section>
        );
    }
}





