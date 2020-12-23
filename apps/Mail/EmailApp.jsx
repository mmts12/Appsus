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
      name: '',
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
    console.log(emailsUnreaded);
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
    var { emails } = this.state;
    if (filterBy.readMails === 'Read')
      return emails.filter((email) => email.isRead);
    else if (filterBy.readMails === 'Unread')
      return emails.filter((email) => !email.isRead);
    else return emails;
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
            {!this.state.modalShow && (
              <EmailList
                emailDelete={this.onDelete}
                emails={this.getEmailsForDisplay()}
              />
            )}
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
