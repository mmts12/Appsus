import { EmailPreview } from './EmailPreview.jsx';

export function EmailList({ emails, emailDelete, markStaredEmail }) {
  return (
    <section>
      {console.log(emails)}

      <ul>
        {emails.map((email) => {
          return (
            <EmailPreview
              markStaredEmail={markStaredEmail}
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
