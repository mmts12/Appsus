import { EmailList } from './cmps/EmailList.jsx';
import { EmailHeader } from './cmps/EmailHeader.jsx';
import { mailService } from './services/MailService.js';

export class EmailApp extends React.Component {
  state = {
    emails: [],
  };

  componentDidMount() {
    mailService.query().then((emails) => {
      this.setState({ emails });
    });
  }

  render() {
    const emails = this.state.emails;
    return (
      <section>
        <EmailHeader />
        <main className="email-main">
          <div className="email-side-bar">SideBar</div>
          <div className="email-list">
            <EmailList emails={emails} />
          </div>
        </main>
      </section>
    );
  }
}
