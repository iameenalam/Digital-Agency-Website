import React from "react";
import "./Footer.css";
import { HashLink as Link } from 'react-router-hash-link';


const quickLinks01 = [
  {
    path: "/#about",
    display: "About",
  },
  {
    path: "/#services",
    display: "Services",
  },
  {
    path: "/#projects",
    display: "Projects",
  },
];

const quickLinks02 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Docs",
  },
  {
    path: "#",
    display: "Guides",
  },
];

const quickLinks03 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerce",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Digency</h2>
            <p className="description">Grow with us</p>

            <p className="small__text description">
              Lorem ipsum dolor sit amet consecte adipisicing. Debitis, sunt!
              Tenetur eum maxime corrupti illum assumenda distinctio iure
              consectetur similique.
            </p>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Company</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <Link smooth to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Support</h3>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Solutions</h3>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/iameenalam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/iameenalam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/iameenalam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-line"></i>
          </a>
        </div>
        <hr className="hr-tag" />
        <p className="copyright">
          Copyright {year} Developed by Ameen Alam. All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
