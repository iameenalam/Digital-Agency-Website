import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

const nav__links = [
  { path: "/#home", display: "Home" },
  { path: "/#services", display: "Services" },
  { path: "/#about", display: "About" },
  { path: "/#projects", display: "Projects" },
  { path: "/#blog", display: "Blog" }
];

const Header = () => {
  const [sticky, setSticky] = useState(false);

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

  return (
    <header className={`header ${sticky ? 'sticky' : ''}`} id='header'>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <Link to="/#home"><h2>Digency</h2></Link>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <Link smooth to={item.path} className="menu__link">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact__us">
            <button className="contact__us-btn" onClick={() => window.location.href = '/contactus'}>
              Contact Us <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
