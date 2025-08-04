import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon logo" />
      </div>

      <nav className="footer-nav">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>

      <address>
        <h4>Contact</h4>
        <p>123 Citrus Lane, Lemonville</p>
        <p><a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></p>
        <p>(123) 456-7890</p>
      </address>

      <section className="social-links">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;