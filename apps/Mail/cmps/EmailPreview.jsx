export function EmailPreview({ email, emailDelete, markStaredEmail }) {
  const markEmail = (email, ev) => {
    ev.stopPropagation();
    markStaredEmail(email);
    // () => markStaredEmail(email)
  };
  return (
    <li className={email.isRead ? 'read' : 'unread'}>
      <div>{email.senderName}</div>
      <div>{email.subject}</div>
      <div className="flex email-actions">
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
          onChange={(ev) => markEmail(email, ev)}
        />
      </div>
    </li>
  );
}
