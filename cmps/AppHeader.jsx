const { Link } = ReactRouterDOM;

export function AppHeader() {
  return (
    <nav className="apps-header">
      <ul className="clean-list flex space-around align-center">
        <Link to="/"><h1 className="logo fab fa-google-drive"><span> Appsus</span></h1></Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/book">MissBooks</Link>
        <Link to="/mail">MrMail</Link>
        <Link to="/keep">MrKeep</Link>
      </ul>
    </nav>
  );
}
