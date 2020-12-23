export function EmailHeader() {
  return (
    <header className="email-header">
      <input
        className="email-input-search"
        type="text"
        name=""
        id=""
        placeholder="Search mail"
      />
      <select name="email-select" id="">
        <option value="">Read</option>
        <option value="">Unread</option>
      </select>
    </header>
  );
}
