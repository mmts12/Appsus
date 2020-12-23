import { EmailPreview } from './EmailPreview.jsx';

export function EmailList({ emails }) {
  return (
    <section>
      {console.log(emails)}

      <ul>
        {emails.map((email) => {
          return <EmailPreview key={email.id} email={email} />;
        })}
      </ul>
    </section>
  );
}
