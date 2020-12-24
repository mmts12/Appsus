export function EmailPreview({ email, emailDelete, markStaredEmail }) {
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
        <input
          type="checkbox"
          name="read/unread"
          onChange={() => markStaredEmail(email)}
        />
      </div>
    </li>
  );
}
