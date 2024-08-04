import React, { useEffect, useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

const nav__links = [
  { path: "/#", display: "Home" },
  { path: "/#services", display: "Services" },
  { path: "/#about", display: "About" },
  { path: "/#projects", display: "Projects" },
  { path: "/#blog", display: "Blog" }
];

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className={`header ${sticky ? 'sticky' : ''}`} id='header'>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <Link to="/#"><h2>Digency</h2></Link>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <Link smooth to={item.path} className="menu__link">
                    {item.display}
                  </Link>
                </li>
              ))}
              <li className="menu__item mobile-contact">
                <button className="contact__us-btn" onClick={() => window.location.href = '/contactus'}>
                  Contact Us <i className="ri-arrow-right-line"></i>
                </button>
              </li>
            </ul>
          </div>
          <div className="contact__us desktop-contact">
            <button className="contact__us-btn" onClick={() => window.location.href = '/contactus'}>
              Contact Us <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
