import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" width="50" height="40" />
            <div>Warehouse App</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
