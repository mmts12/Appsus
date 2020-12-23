export function EmailPreview({ email }) {
  return (
    <li>
      <div>{email.senderName}</div>
      <div>{email.subject}</div>
      <div>{email.sentAt}</div>
    </li>
  );
}
