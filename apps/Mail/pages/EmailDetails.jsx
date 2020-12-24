import { emailService } from '../services/emailService.js';
export class EmailDetails extends React.Component {
  state = {
    email: '',
  };
  componentDidMount() {
    const { mailId } = this.props.match.params;
    if (!mailId) return;
    emailService.getEmailById(mailId).then((email) => {
      this.setState({ email });
    });
  }

  onReturnList = () => {
    console.log('return');
  };

  render() {
    {
      if (!this.state.email) return <h1>Loading...</h1>;
    }
    const { email } = this.state;
    return (
      <section className="email-details">
        <div className="email-details-main-content">
          <h1>{email.subject}</h1>
          <h2>{email.senderName}</h2>
          <div className="from-container">
            <h3>from: {email.senderEmail}</h3>
            <div>{`${email.fullDate}`}</div>
          </div>
          {/* <button onClick={this.onReturnList}>Back</button> */}
          <pre>{this.state.email.body}</pre>
        </div>
      </section>
    );
  }
}
