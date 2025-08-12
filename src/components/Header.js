import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logo from '../assets/logo.png';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollNav = (sectionId) => {
    if (location.pathname === '/') {
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -80, // header height adjustment
      });
    } else {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }, 100);
    }
  };

  return (
    <header className="nav-bar">
      <img src={logo} alt="Little Lemon Logo" className="logo" />

      <nav>
        <ul>
        {/* React Router links */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>

        {/* Scroll links */}
        <li>
          <ScrollLink
            to="specials"
            smooth={true}
            offset={-80}
            duration={500}
            component="a"
          >
            Specials
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="testimonials"
            smooth={true}
            offset={-80}
            duration={500}
            component="a"
          >
            Testimonials
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            component="a"
          >
            About
          </ScrollLink>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default Header;