import { EmailPreview } from './EmailPreview.jsx';

export function EmailList({ emails, emailDelete, markReadEmail, onSetStars }) {
  return (
    <section>
      {console.log(emails)}

      <ul>
        {emails.map((email) => {
          return (
            <EmailPreview
              onSetStars={onSetStars}
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
