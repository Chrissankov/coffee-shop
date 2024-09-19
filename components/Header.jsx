export default function Header() {
  return (
    <header className="header">
      <h1 className="header--title">Coffee-shop</h1>
      <nav className="nav">
        <a href="#home" className="nav--home">
          Home
        </a>
        <a href="#about" className="nav--about">
          About
        </a>
        <a href="#contact" className="nav--contact">
          Contact
        </a>
        <a href="#login" className="nav--login">
          Login
        </a>
      </nav>
    </header>
  );
}
