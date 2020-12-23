import { EmailList } from './cmps/EmailList.jsx';
import { EmailHeader } from './cmps/EmailHeader.jsx';
import { emailService } from './services/emailService.js';

export class EmailApp extends React.Component {
  state = {
    emails: [],
    filterBy: {
      readMails: 'all',
      name: '',
    },
  };

  componentDidMount() {
    emailService.query().then((emails) => {
      this.setState({ emails });
    });
  }

  setFilter = (filterBy) => {
    this.setState({ filterBy });
  };

  getEmailsForDisplay = () => {
    const { filterBy } = this.state;
    var { emails } = this.state;
    if (filterBy.readMails === 'Read')
      return emails.filter((email) => email.isRead);
    else if (filterBy.readMails === 'Unread')
      return emails.filter((email) => !email.isRead);
    else return emails;
  };

  onDelete = (id) => {
    console.log(id);
  };

  render() {
    return (
      <section>
        <EmailHeader setFilter={this.setFilter} />
        <main className="email-main">
          <div className="email-side-bar">SideBar</div>
          <div className="email-list">
            <h1>Mail List</h1>
            <EmailList
              delete={this.onDelete}
              emails={this.getEmailsForDisplay()}
            />
          </div>
        </main>
      </section>
    );
  }
}
