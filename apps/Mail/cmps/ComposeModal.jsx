export class ComposeModal extends React.Component {
  state = {
    senderName: '',
    subject: '',
    bodyTxt: '',
  };

  handleInputs = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({ [name]: value });
  };

  addNewMail = () => {
    let newMail = { ...this.state };
    if (!newMail.senderName || !newMail.subject || !newMail.bodyTxt) return;
    this.props.onAddNewMail(newMail);
    this.props.closeModal();
  };

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return (
      <section className="email-add-section">
        <div className="email-subject-input">
          <label>
            Subject:
            <input
              ref={(input) => {
                this.nameInput = input;
              }}
              type="text"
              name="subject"
              placeholder="Subject Here"
              onChange={this.handleInputs}
            />
          </label>
        </div>
        <div className="email-to-input">
          <label>
            To:
            <input
              type="text"
              name="senderName"
              placeholder="Send to"
              onChange={this.handleInputs}
            />
          </label>
        </div>
        <textarea
          name="bodyTxt"
          cols="30"
          rows="5"
          placeholder="Write your Email here"
          onChange={this.handleInputs}
        ></textarea>
        <button onClick={this.addNewMail}>Send</button>
        <button onClick={this.props.closeModal}>Close</button>
      </section>
    );
  }
}
