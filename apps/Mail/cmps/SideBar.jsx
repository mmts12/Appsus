export class SideBar extends React.Component {
  render() {
    return (
      <section className="email-side-bar">
        <i onClick={this.props.addEmail} className="fas fa-plus btn-compose">New Mail</i>

        <div className="side-bar-menu flex col space-around">
          <ul className="menu-list clean-list">
            <li>
              <i className="fas fa-inbox" ></i>
              <span>Inbox</span>
            </li>

            <li>
              <i className="fas fa-paper-plane" ></i>
              <span>Sent</span>
            </li>

            <li>
              <i className="far fa-star starred-btn" onClick={this.props.onShowStarsEmails}></i>
              <span>Starred</span>
            </li>

            <li>
              <i className="fas fa-trash"></i>
              <span>Trash</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
