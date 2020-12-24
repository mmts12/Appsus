
import { ColorCmp } from "./ColorCmps.jsx";

export class KeepEdit extends React.Component {

  state = {
    display: 'flex',
    palleteOpacity: 0,
  }

  onHover = () => {
    console.log('im hovered');
    this.setState({ display: 'none' })
  }

  changeBgcNote = (color) => {
    this.props.onChangeBgcNote(this.props.note.id, color)
  }

  togglePallete = () => {
    var opacity = this.state.palleteOpacity === 1 ? 0 : 1;
    this.setState({ palleteOpacity: opacity });
  }

  render() {
    const { display } = this.state;
    const { note, onDeleteNote, onPinnNote, onEditNote, onCloneNote } = this.props;
    return (
      <div className="keep-edit flex space-between" style={{ display }}>
        <i className="fas fa-thumbtack" onClick={() => onPinnNote(note.id)}></i>
        <i className="fas fa-edit" onClick={() => onEditNote(note.id)}></i>
        <i className="fas fa-palette" onClick={this.togglePallete}></i>
        <ColorCmp onChangeBgcNote={this.changeBgcNote} opacity={this.state.palleteOpacity} togglePallete={this.togglePallete} />
        <i className="far fa-clone" onClick={() => onCloneNote(note.id)}></i>
        <i className="fas fa-trash-alt delete-btn" onClick={() => onDeleteNote(note.id)}></i>
      </div>
    )
  }
}




