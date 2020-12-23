
export class KeepAdd extends React.Component {

  state = {
    note: {
      type: '',
      isPinned: false,
      info: '',
      style: {
        bgColor: 'whitesmoke',
      },
    },
    placeholder: 'What\'s on your mind...',
  };

  componentDidMount() {
    console.log(this.state.note);
  }

  handleChange = (ev) => {
    const copy = { ...this.state.note };
    copy.info = ev.target.value;
    this.setState({ note: copy });
  }

  onText = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteText';
    this.setState({ note: copy, placeholder: 'Enter your text...' });
  }

  onImg = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteImg';
    this.setState({ note: copy, placeholder: 'Enter Image URL...' });
  }

  onVideo = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteVideo';
    this.setState({ note: copy, placeholder: 'Enter Video URL...' });
  }

  onAudio = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteAudio';
    this.setState({ note: copy, placeholder: 'I\'m listening...' });
  }

  onTodo = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteTodo';
    this.setState({ note: copy, placeholder: 'Enter comma seperated todo\'s...' });
  }

  onAdd = (ev) => {
    ev.preventDefault();
    const { note } = this.state;
    this.props.addNote(note);

    const copy = { ...this.state.note };
    copy.info = '';
    this.setState({ note: copy , placeholder: 'Something else?..' });
  }

  render() {
    return (
      <form onSubmit={this.onAdd}>
        <input
          type="text"
          value={this.state.note.info}
          autoFocus
          placeholder={this.state.placeholder}
          onChange={this.handleChange}
        />
        <i className="fas fa-font" onClick={this.onText}></i>
        <i className="far fa-image" onClick={this.onImg}></i>
        <i className="fab fa-youtube" onClick={this.onVideo}></i>
        {/* <i className="fas fa-volume-up" onClick={this.onAudio}></i> */}
        <i className="fas fa-list-ul" onClick={this.onTodo}></i>
      </form>
    );
  }
}





