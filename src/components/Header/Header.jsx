import React from 'react';
import './Header.css';

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ onPlaceOrderClick }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Digency</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li key={index} className="menu__item">
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="place__order">
            <button className="place__order-btn" onClick={onPlaceOrderClick}>
              Place Order <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
