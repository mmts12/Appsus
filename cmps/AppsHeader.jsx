const { Link } = ReactRouterDOM;

export function AppsHeader() {
  return (
    <nav className="apps-header">
      <ul className="clean-list flex space-around align-center">
        <h1 className="logo">Appsus</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/book">MissBooks</Link>
        <Link to="/mail">MrMail</Link>
        <Link to="/keep">MrKeep</Link>
      </ul>
    </nav>
  );
}
