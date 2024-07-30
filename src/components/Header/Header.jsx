import React, {useRef, useEffect} from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const nav__links = [
  { 
    path: "#home",
    display: "Home" 
  },
  { 
    path: "#services",
    display: "Services"
  },
  { path: "#about",
    display: "About"
  },
  { path: "#projects",
    display: "Projects"
  },
  { path: "#blog",
    display: "Blog"
  }];

const Header = ({ onPlaceOrderClick }) => {

  const headerRef = useRef(null)

  const headerFunc = () => {
    if(document.body.scroll > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('header__shrink')
    } else{
      headerRef.current.classList.remove('header__shrink')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',headerFunc)

    return ()=> window.removeEventListener('scroll',headerFunc)
  },[])

  const handleClick = (e) => {
    e.preventDefault();
    
    const targetAttr = e.target.getAttribute("href");

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Digency</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a href={item.path} onClick={handleClick} 
                  className="menu__link">
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
