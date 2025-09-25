import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as scroller } from 'react-scroll';


function NavItem({ to, label }) {
  const location = useLocation();
  const navigate = useNavigate();

  // If it's a route (starts with "/"), use React Router's Link
  if (to.startsWith('/')) {
    return (
      <li>
        <Link to={to}>{label}</Link>
      </li>
    );
  }

  // Otherwise, it's a scroll section
  const handleClick = () => {
    if (location.pathname === '/') {
      // Already on homepage → scroll immediately
      scroller.scrollTo(to, {
        smooth: true,
        offset: -80,
        duration: 500,
      });
    } else {
      // Navigate home first, then scroll
      navigate('/', { state: { scrollTarget: to } });
    }
  };

  return (
    <li>
      <button className="nav-button" onClick={handleClick}>
        {label}
      </button>
    </li>
  );
}

function Header() {
  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/booking', label: 'Reservations' },
    { to: 'specials', label: 'Specials' },
    { to: 'testimonials', label: 'Testimonials' },
    { to: 'about', label: 'About' },
  ];

  return (
    <nav className="nav-bar" aria-label="Main Navigation">
      <img src="/navlogo.png" alt="Little Lemon Logo" className="logo" />
      <ul>
        {menuItems.map((item, idx) => (
          <NavItem key={idx} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default Header;