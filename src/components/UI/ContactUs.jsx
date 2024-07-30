import React from "react";
import "../../styles/contactus.css";

const ContactUs = () => {
  return (
    <section id="contactus">
      <h2>Contact Us</h2>
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
            <i className="ri-global-line"></i>
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
            <i className="ri-message-2-line"></i>
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
