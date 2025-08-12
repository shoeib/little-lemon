import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
//import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    if (location.pathname === '/') {
      // Already on home page → just scroll
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -50,
      });
    } else {
      // Navigate to home first, then scroll
      navigate('/', { state: { scrollTo: section } });
    }
  };

  return (
    <header className="nav-bar">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/booking">Reservations</RouterLink>
          </li>
          <li>
            <button className='nav-button' onClick={() => handleNavClick('hero')}>Hero</button>
          </li>
          <li>
            <button className='nav-button' onClick={() => handleNavClick('specials')}>Specials</button>
          </li>
          <li>
            <button className='nav-button' onClick={() => handleNavClick('testimonials')}>Testimonials</button>
          </li>
          <li>
            <button className='nav-button' onClick={() => handleNavClick('about')}>About</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;