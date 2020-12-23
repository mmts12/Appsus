export function EmailPreview({ email }) {
  return (
    <li>
      <button>Delete</button>
      <div>{email.senderName}</div>
      <div>{email.subject}</div>
      <div>{email.sentAt}</div>
    </li>
  );
}
