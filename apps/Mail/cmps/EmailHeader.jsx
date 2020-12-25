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
    const { emailsStatus } = this.props;
    console.log(emailsStatus);
    return (
      <header
        className="flex space-between align-center"
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <form className="email-header">
          <i className="fas fa-search search-btn">
            <input
              className="email-input-search"
              type="text"
              name="subject"
              id=""
              placeholder="Search mail"
              onChange={this.handleInput}
            />
          </i>
          <select name="readMails" onChange={this.handleInput}>
            <option value="All">All</option>
            <option value="Read">Read</option>
            <option value="Unread">Unread</option>
          </select>
        </form>
        <i className="far fa-envelope unread-mails">
          {this.props.emailsUnreaded}
        </i>
        <i className="far status-icon fa-star">{emailsStatus.starred}</i>

        <i className="far status-icon fa-paper-plane">{emailsStatus.sent}</i>
      </header>
    );
  }
}
