import { emailService } from '../services/emailService.js';
const { Link } = ReactRouterDOM;
export class EmailDetails extends React.Component {
  state = {
    email: '',
    nextEmail: '',
    prevEmail: '',
  };
  componentDidMount() {
    this.loadMail();
  }

  loadMail() {
    const { mailId } = this.props.match.params;
    if (!mailId) return;
    emailService.getEmailById(mailId).then((email) => {
      this.setState({ email });
      this.onReadEmail(email);
      this.getNavIds();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.mailId !== this.props.match.params.mailId)
      this.loadMail();
  }

  onReadEmail = () => {
    let { email } = this.state;
    emailService.markEmailReaded(email);
  };

  getNavIds = () => {
    const { id } = this.state.email;
    emailService.getIdForNavigation(id).then((navIds) => {
      this.setState({ nextEmail: navIds.next, prevEmail: navIds.prev });
    });
  };

  render() {
    {
      if (!this.state.email) return <h1>Loading...</h1>;
    }
    const { email, nextEmail, prevEmail } = this.state;
    return (
      <section className="email-details">
        <div className="email-details-main-content">
          <Link to="/mail">
            <i
              className="far fa-arrow-alt-circle-left"
              title="back to email list"
            ></i>
          </Link>
          <h1>{email.subject}</h1>
          <h2>{email.senderName}</h2>
          <div className="from-container">
            <h3>from: {email.senderEmail}</h3>
            <div>{`${email.fullDate}`}</div>
          </div>
          <div className="email-details-actions">
            {prevEmail && (
              <Link to={`/mail/${prevEmail}`}>
                <i
                  className="fas prev-next-btn fa-arrow-left "
                  title="prev mail"
                ></i>
              </Link>
            )}
            {nextEmail && (
              <Link to={`/mail/${nextEmail}`}>
                <i
                  className="fas prev-next-btn fa-arrow-right"
                  title="next mail"
                ></i>
              </Link>
            )}
          </div>
          <pre>{this.state.email.body}</pre>
        </div>
      </section>
    );
  }
}
