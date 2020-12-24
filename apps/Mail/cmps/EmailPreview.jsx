export function EmailPreview({ email, emailDelete, markReadEmail }) {
  const markEmail = (email, ev) => {
    ev.stopPropagation();
    markReadEmail(email);
  };
  return (
    <li className={email.isRead ? 'read' : 'unread'}>
      <input
        type="checkbox"
        // name="read/unread"
        onChange={(ev) => markEmail(email, ev)}
      />
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
      </div>
    </li>
  );
}
