import { EmailPreview } from './EmailPreview.jsx';

export function EmailList({ emails, emailDelete, markReadEmail }) {
  return (
    <section>
      {console.log(emails)}

      <ul>
        {emails.map((email) => {
          return (
            <EmailPreview
              markReadEmail={markReadEmail}
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
