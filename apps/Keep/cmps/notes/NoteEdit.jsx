export class NoteEdit extends React.Component {
    state = {
        note: {
            type: '',
            isPinned: false,
            info: { txt: '' },
            style: {
                bgColor: 'whitesmoke',
            },
        },
        placeholder: 'Right Something...',
        isTitled: false,
    };

    componentDidMount() {
        // console.log(this.state.note);
    }

    editNote = (note) => {
        console.log('hi',note);
    }

    handleChange = (ev) => {
        const copy = { ...this.state.note };
        if (copy.type === 'NoteText') copy.info.txt = ev.target.value;
        else copy.info = [title = ev.target.value];
        console.log('copy', copy);
        this.setState({ note: copy });
    }


    render() {
        const { display } = this.props;
        return (
            <section className='modal-edit-note' style={{ display }}>
                <input
                    type='text'
                    name='title'
                    value={this.state.note.info.txt || ''}
                    autoFocus
                    placeholder={this.state.placeholder}
                    onChange={this.handleChange}
                />
            </section>
        )
    }
}