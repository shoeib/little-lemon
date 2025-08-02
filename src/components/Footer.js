// Footer.js
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer>
      {/* Logo */}
      <section aria-label="Company logo">
        <img src={logo} alt="Little Lemon logo" width="150" />
      </section>

      {/* Contact Info */}
      <address>
        <h4>Contact Us</h4>
        <p>123 Citrus Lane, Lemonville</p>
        <p>Email: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></p>
        <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
      </address>

      {/* Social Media Links */}
      <section aria-label="Social media">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
        </ul>
      </section>

      {/* Doormat Navigation */}
      <nav aria-label="Footer navigation">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#order">Order online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;