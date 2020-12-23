import { EmailPreview } from './EmailPreview.jsx';

export function EmailList({ emails, emailDelete }) {
  return (
    <section>
      {console.log(emails)}

      <ul>
        {emails.map((email) => {
          return (
            <EmailPreview
              emailDelete={emailDelete}
              key={email.id}
              email={email}
            />
          );
        })}
      </ul>
    </section>
  );
}
