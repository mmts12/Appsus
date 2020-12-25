import { emailService } from '../services/emailService.js';
const { Link } = ReactRouterDOM;
export function EmailPreview({
  email,
  emailDelete,
  markReadEmail,
  onSetStars,
}) {
  const markEmail = (email, ev) => {
    markReadEmail(email);
  };
  const starMail = () => {
    emailService.markEmailStared(email.id);
    onSetStars();
  };
  return (
    <li className={email.isRead ? 'read' : 'unread'}>
      <div>
        {/* <input
          type="checkbox"
          checked={email.isRead ? true : false}
          onChange={(ev) => markEmail(email, ev)}
        /> */}

        <i
          onClick={(ev) => starMail()}
          className={
            email.isStar
              ? 'star-btn-active far fa-star'
              : 'star-btn far fa-star'
          }
        ></i>
        <i
          onClick={() => emailDelete(email.id)}
          class="far fa-trash-alt email-delete-btn"
        ></i>
        {/* <button
          className="email-delete-btn"
          onClick={() => emailDelete(email.id)}
        >
          Delete
        </button> */}
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
