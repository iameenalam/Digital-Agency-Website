import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "../../styles/contactus.css";

const ContactUs = () => {
  return (
    <section id="contactus">
      <div className="contactus__left">
        <h6 className="subtitle">Contact Us</h6>
        <h2>Transforming Visions</h2>
        <h2 className="highlight">Into Reality</h2>
        <p className="description">
          If you have any questions, feel free to reach out to us by filling out
          the form on the right. We're here to help!
        </p>
        <a
          href="mailto:info@digency.com"
          className="email-link"
        >
          <i className="ri-mail-line"></i> info@digency.com
        </a>
        <Link smooth to="/#blog" className="blog-button">
          Our Blog
        </Link>
      </div>
      <div className="container">
        <form>
          <div className="form-group">
            <i className="ri-user-line"></i>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <i className="ri-group-line"></i>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="Organization's Name"
              required
            />
          </div>
          <div className="form-group">
            <i className="ri-mail-line"></i>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <i className="ri-chat-1-line message-icon"></i>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Submit now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
