export function EmailPreview({ email, emailDelete }) {
  return (
    <li className={email.isRead ? 'read' : 'unread'}>
      <div>{email.senderName}</div>
      <div>{email.subject}</div>
      <div>
        <div>{email.sentAt}</div>
        <button
          className="email-delete-btn"
          onClick={() => emailDelete(email.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
