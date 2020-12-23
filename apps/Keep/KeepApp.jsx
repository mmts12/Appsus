import { KeepDynamicCmp } from "./cmps/KeepDynamicCmp.jsx";
import { keepService } from "./services/keepService.js";

export class KeepApp extends React.Component {

    state = {
        notes: [],
    };

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        const notes = keepService.query()
        this.setState({ notes });
    }

    render() {
        const { notes } = this.state;
        return (
            <section className="keep-app">
                <h1>Keep App</h1>
                {notes.map((note, idx) => {
                    <article key={idx}>
                        <KeepDynamicCmp currCmp={note.type} info={note.info} />
                    </article>
                })}
                <hr />
                <pre>{JSON.stringify(notes, null, 2)}</pre>
            </section>
        );
    }
}





