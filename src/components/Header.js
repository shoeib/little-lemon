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
          <li><Link to="/">Home</Link></li>
          <li><button onClick={() => handleScrollNav('specials')}>Specials</button></li>
          <li><button onClick={() => handleScrollNav('testimonials')}>Testimonials</button></li>
          <li><button onClick={() => handleScrollNav('about')}>About</button></li>
          <li><Link to="/booking">Reservations</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;