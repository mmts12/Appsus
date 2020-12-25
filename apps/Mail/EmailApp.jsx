import { EmailList } from './cmps/EmailList.jsx';
import { EmailHeader } from './cmps/EmailHeader.jsx';
import { emailService } from './services/emailService.js';
import { SideBar } from './cmps/SideBar.jsx';
import { ComposeModal } from './cmps/ComposeModal.jsx';

export class EmailApp extends React.Component {
  state = {
    emails: [],
    staredEmails: [],
    filterBy: {
      readMails: 'all',
      subject: '',
    },
    emailsUnreaded: 0,
    modalShow: false,
    isStaredShow: false,
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
      this.getStaredEmailsForDisplay();
    });
  };

  setFilter = (filterBy) => {
    this.setState({ filterBy });
  };

  getEmailsForDisplay = () => {
    const { filterBy, staredEmails, emails } = this.state;
    const emailsForDisplay = this.state.isStaredShow ? staredEmails : emails;
    const filter = filterBy.subject.toLowerCase();
    if (filterBy.readMails === 'Read') {
      return emailsForDisplay.filter((email) => {
        let emailTofilter = email.subject.toLowerCase();
        return email.isRead && emailTofilter.includes(filter);
      });
    } else if (filterBy.readMails === 'Unread') {
      return emailsForDisplay.filter((email) => {
        let emailTofilter = email.subject.toLowerCase();
        return !email.isRead && emailTofilter.includes(filter);
      });
    } else {
      return emailsForDisplay.filter((email) => {
        let emailTofilter = email.subject.toLowerCase();
        return emailTofilter.includes(filter);
      });
    }
  };

  getStaredEmailsForDisplay = () => {
    const { emails } = this.state;
    let staredEmails = emails.filter((email) => email.isStar);
    this.setState({ staredEmails });
  };

  onShowStarsEmails = () => {
    let isStaredShow = this.state.isStaredShow;
    isStaredShow = !isStaredShow;
    this.setState({ isStaredShow });
  };

  onSetStars = () => {
    console.log('star');
    this.loadEmails();
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
          <SideBar
            onShowStarsEmails={this.onShowStarsEmails}
            addEmail={this.onOpenModal}
          />
          <div className="email-list">
            <EmailList
              onSetStars={this.onSetStars}
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
