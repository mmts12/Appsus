export class SideBar extends React.Component {
  render() {
    return (
      <section className="email-side-bar">
        <button>
          <i onClick={this.props.addEmail} className="fas fa-plus btn-compose">
            Compose
          </i>
        </button>
        {/* <button onClick={this.props.addEmail}>+ Compose</button> */}
        <button className="starred-btn" onClick={this.props.onShowStarsEmails}>
          <i class="far fa-star"></i>
          Starred
        </button>
      </section>
    );
  }
}
