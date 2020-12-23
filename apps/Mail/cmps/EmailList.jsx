export function EmailList({ emails }) {
  return (
    <section>
      {console.log(emails)}
      <h1>Mail List</h1>
      <ul>
        {emails.map((email) => {
          return (
            <li>
              <div>{email.senderName}</div>
              <div>{email.subject}</div>
              <div>{email.sendAt}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
