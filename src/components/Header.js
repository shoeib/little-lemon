import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="nav-bar">
      <img src={logo} alt="Little Lemon logo" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>

          <li>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-80} // adjust for header height
            >
              Hero
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="specials" smooth={true} duration={500} offset={-80}>
              Specials
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="testimonials" smooth={true} duration={500} offset={-80}>
              Testimonials
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
              About
            </ScrollLink>
          </li>

          <li><Link to="/booking">Reservations</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;