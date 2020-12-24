export class EmailHeader extends React.Component {
  state = {
    filterBy: { readMails: '', subject: '' },
  };
  componentDidMount() {}

  handleInput = (ev) => {
    const callback = () => {
      const { setFilter } = this.props;
      const filterBy = this.state.filterBy;
      setFilter(filterBy);
    };
    let value = ev.target.value;
    let name = ev.target.name;
    let filterByCopy = this.state.filterBy;
    filterByCopy[name] = value;
    this.setState({ filterByCopy }, callback);
  };
  render() {
    return (
      <header className="email-header">
        <input
          className="email-input-search"
          type="text"
          name="subject"
          id=""
          placeholder="Search mail"
          onChange={this.handleInput}
        />
        <select name="readMails" onChange={this.handleInput}>
          <option value="All">All</option>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>
        <label>Unreaded Emails:{this.props.emailsUnreaded}</label>
      </header>
    );
  }
}
