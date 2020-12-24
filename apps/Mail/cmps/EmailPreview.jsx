const { Link } = ReactRouterDOM;
export function EmailPreview({ email, emailDelete, markReadEmail }) {
  const markEmail = (email, ev) => {
    markReadEmail(email);
  };
  return (
    <li className={email.isRead ? 'read' : 'unread'}>
      <div>
        <input
          type="checkbox"
          checked={email.isRead ? true : false}
          onChange={(ev) => markEmail(email, ev)}
        />
        <button
          className="email-delete-btn"
          onClick={() => emailDelete(email.id)}
        >
          Delete
        </button>
      </div>
      <Link to={`/mail/${email.id}`}>
        <div className="email-details-container">
          <div className="">{email.senderName}</div>
          <div>{email.subject}</div>
          <div className="flex email-actions">
            <div>{email.sentAt}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

//  <Link to={`/mail/${email.id}`}></Link>
