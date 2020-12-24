import { EmailList } from './cmps/EmailList.jsx';
import { EmailHeader } from './cmps/EmailHeader.jsx';
import { emailService } from './services/emailService.js';
import { SideBar } from './cmps/SideBar.jsx';
import { ComposeModal } from './cmps/ComposeModal.jsx';

export class EmailApp extends React.Component {
  state = {
    emails: [],
    filterBy: {
      readMails: 'all',
      subject: '',
    },
    emailsUnreaded: 0,
    modalShow: false,
  };

  onOpenModal = () => {
    this.setState({ modalShow: true });
  };
  onCloseModal = () => {
    this.setState({ modalShow: false });
  };

  onAddNewMail = () => {
    console.log('add');
  };

  componentDidMount() {
    this.loadEmails();
    this.countUnreadedeEmails();
  }

  countUnreadedeEmails = () => {
    let emailsUnreaded = emailService.countUnreadEmails();
    this.setState({ emailsUnreaded });
  };

  loadEmails = () => {
    emailService.query().then((emails) => {
      this.setState({ emails });
    });
  };

  setFilter = (filterBy) => {
    this.setState({ filterBy });
  };

  getEmailsForDisplay = () => {
    const { filterBy } = this.state;
    const { emails } = this.state;
    const filter = filterBy.subject.toLowerCase();
    if (filterBy.readMails === 'Read') {
      return emails.filter((email) => {
        let emailTofilter = email.subject.toLowerCase();
        return email.isRead && emailTofilter.includes(filter);
      });
    } else if (filterBy.readMails === 'Unread') {
      return emails.filter((email) => {
        let emailTofilter = email.subject.toLowerCase();
        return !email.isRead && emailTofilter.includes(filter);
      });
    } else {
      return emails.filter((email) => {
        let emailTofilter = email.subject.toLowerCase();
        return emailTofilter.includes(filter);
      });
    }
  };

  onAddNewMail = (mail) => {
    emailService.addNewMail(mail);
    this.loadEmails();
    this.countUnreadedeEmails();
  };

  onDelete = (id) => {
    emailService.deleteEmail(id).then((emails) => {
      this.setState({ emails });
      this.countUnreadedeEmails();
    });
  };

  onReadEmail = (emailToMArk) => {
    emailService.markEmailRead(emailToMArk).then(() => {
      this.loadEmails();
    });
    this.countUnreadedeEmails();
  };
  render() {
    return (
      <section className="app-main">
        <EmailHeader
          emailsUnreaded={this.state.emailsUnreaded}
          setFilter={this.setFilter}
        />
        <main className="email-main">
          <SideBar addEmail={this.onOpenModal} />
          <div className="email-list">
            <EmailList
              markReadEmail={this.onReadEmail}
              emailDelete={this.onDelete}
              emails={this.getEmailsForDisplay()}
            />

            {this.state.modalShow && (
              <ComposeModal
                onAddNewMail={this.onAddNewMail}
                closeModal={this.onCloseModal}
              />
            )}
          </div>
        </main>
      </section>
    );
  }
}
