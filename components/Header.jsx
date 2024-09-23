import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header--title">Coffee-shop</h1>
      <nav className="nav">
        <Link to="/" className="nav--home">
          Home
        </Link>
        <Link to="/menu" className="nav--menu">
          Menu
        </Link>
        <Link to="/contact" className="nav--contact">
          Contact
        </Link>
        <Link to="/login" className="nav--login">
          Login
        </Link>
      </nav>
    </header>
  );
}
