export class SideBar extends React.Component {
  render() {
    return (
      <section className="email-side-bar">
        <button onClick={this.props.addEmail}>+ Compose</button>
        <button onClick={this.props.onShowStarsEmails}>Starred</button>
      </section>
    );
  }
}
