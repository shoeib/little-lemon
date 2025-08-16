// Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          {/* Always visible */}
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/booking" className="nav-link">
              Reservations
            </Link>
          </li>

          {/* Specials */}
          <li>
            {isHomePage ? (
              <ScrollLink to="specials" smooth={true} duration={500} className="nav-link">
                Specials
              </ScrollLink>
            ) : (
              <Link to="/#specials" className="nav-link">
                Specials
              </Link>
            )}
          </li>

          {/* Testimonials */}
          <li>
            {isHomePage ? (
              <ScrollLink to="testimonials" smooth={true} duration={500} className="nav-link">
                Testimonials
              </ScrollLink>
            ) : (
              <Link to="/#testimonials" className="nav-link">
                Testimonials
              </Link>
            )}
          </li>

          {/* About */}
          <li>
            {isHomePage ? (
              <ScrollLink to="about" smooth={true} duration={500} className="nav-link">
                About
              </ScrollLink>
            ) : (
              <Link to="/#about" className="nav-link">
                About
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;