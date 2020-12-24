
export class KeepAdd extends React.Component {

  state = {
    note: {
      type: 'NoteText',
      isPinned: false,
      info: { txt: '' },
      style: {
        bgColor: 'whitesmoke',
      },
    },
    placeholder: 'What\'s on your mind...',
    isTitled: false,
  };

  componentDidMount() {
    // console.log(this.state.note);
  }

  handleChange = (ev) => {
    const copy = { ...this.state.note };
    if (copy.type === 'NoteText') copy.info.txt = ev.target.value;
    else copy.info = [title = ev.target.value];
    console.log('copy', copy);
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
    this.setState({
      note: copy,
      placeholder: 'Enter Image URL...',
      isTitled: true,
    });
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
    // const copy = { ...this.state.note };
    // if (typeof copy.info.txt === 'object') JSON.stringify(copy.info.txt);
    // this.props.addNote(copy);

    const { note } = this.state;
    console.log('child sent', note);
    this.props.addNote(note);

    const noteCopy = { ...this.state.note };
    noteCopy.info = { txt: '' };
    this.setState({ note: noteCopy, placeholder: 'Something else?..' });
  }

  render() {
    return (
      <form onSubmit={this.onAdd}>
        {/* <input hidden={!this.state.isTitled}
          type='text'
          name='title'
          value={this.state.note.info.txt}
          autoFocus
          placeholder='Enter Title Here...'
          onChange={this.handleChange}
        />
 */}
        <input
          type='text'
          name='title'
          value={this.state.note.info.txt || ''}
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





