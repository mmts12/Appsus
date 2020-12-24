
export class KeepSearch extends React.Component {

  state = {
    display: 'flex',
    palleteOpacity: 0,
  }

  handleChange = (ev) => {
    this.props.searchNote(ev.target.value);
  }

  render() {
    return (
      <div className='search-area'>
        <i className="fas fa-search search-btn"></i>
        <input type="text" name="search" placeholder="Search Note By Title" onChange={this.handleChange} />
      </div>
    )
  }
}



