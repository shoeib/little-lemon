import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

function NavItem({ to, label }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!to.startsWith("/")) {
      e.preventDefault(); // stop Link from navigating

      if (location.pathname === "/") {
        // Already on homepage → scroll immediately
        scroller.scrollTo(to, {
          smooth: true,
          offset: -80,
          duration: 500,
        });
      } else {
        // Navigate home first, then scroll
        navigate("/", { state: { scrollTarget: to } });
      }
    }
  };

  return (
    <li>
      <Link
        to={to.startsWith("/") ? to : "/"} // route if starts with "/", otherwise home
        onClick={handleClick}
        className="nav-button"
      >
        {label}
      </Link>
    </li>
  );
}

function Header() {
  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/booking", label: "Reservations" },
    { to: "specials", label: "Specials" },
    { to: "testimonials", label: "Testimonials" },
    { to: "about", label: "About" },
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