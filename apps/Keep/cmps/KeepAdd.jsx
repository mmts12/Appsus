
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
    copy.info = { txt: '' };
    this.setState({ note: copy }, console.log('note:', this.state.note, 'copy', copy));
  }

  onImg = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteImg';
    this.setState({ note: copy }, console.log('note:', this.state.note, 'copy', copy));
  }

  onVideo = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteVideo';
    this.setState({ note: copy });
    console.log(this.state.note);
  }

  onAudio = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteAudio';
    this.setState({ note: copy });
    console.log(this.state.note);
  }

  onTodo = () => {
    const copy = { ...this.state.note };
    copy.type = 'NoteText';
    this.setState({ note: copy });
    console.log(this.state.note);
  }

  onAdd = (ev) => {
    ev.preventDefault();
    const { note } = this.state;
    this.setState({ info: '' });
    this.props.addNote(note);
  }

  render() {
    return (
      <form onSubmit={this.onAdd}>
        <input
          type="text"
          value={this.state.note.info}
          autoFocus
          placeholder="What's on your mind.."
          onChange={this.handleChange}
        />
        <i className="fas fa-font" onClick={this.onText}></i>
        <i className="far fa-image" onClick={this.onImg}></i>
        <i className="fab fa-youtube" onClick={this.onVideo}></i>
        <i className="fas fa-volume-up" onClick={this.onAudio}></i>
        <i className="fas fa-list-ul" onClick={this.onTodo}></i>
      </form>
    );
  }
}





