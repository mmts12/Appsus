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
    this.props.onAddNewMail(newMail);
    this.props.closeModal();
  };

  render() {
    return (
      <section className="email-add-section">
        <label>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="subject"
            onChange={this.handleInputs}
          />
        </label>
        <label>
          To
          <input
            type="text"
            name="senderName"
            placeholder="send to"
            onChange={this.handleInputs}
          />
        </label>
        <textarea
          name="bodyTxt"
          cols="30"
          rows="10"
          onChange={this.handleInputs}
        ></textarea>
        <button onClick={this.addNewMail}>Send</button>
        <button onClick={this.props.closeModal}>Close</button>
      </section>
    );
  }
}
