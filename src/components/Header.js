import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="nav-bar">
      <img src={logo} alt="Little Lemon logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;