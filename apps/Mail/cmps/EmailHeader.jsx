export class EmailHeader extends React.Component {
  state = {
    filterBy: { readMails: '', name: '' },
  };
  componentDidMount() {}

  handleInput = (ev) => {
    const callback = () => {
      const { setFilter } = this.props;
      const filterBy = this.state;
      setFilter(filterBy);
    };
    let readMails = ev.target.value;
    this.setState({ readMails }, callback);
  };
  render() {
    return (
      <header className="email-header">
        <input
          className="email-input-search"
          type="text"
          name=""
          id=""
          placeholder="Search mail"
        />
        <select name="email-select" onChange={this.handleInput}>
          <option value="All">All</option>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>
        <label>Unreaded Emails:{this.props.emailsUnreaded}</label>
      </header>
    );
  }
}
