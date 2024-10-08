import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/contactus.css";

const ContactUs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xblroprl", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      toast.success("Form submitted successfully!");
      form.reset();
    } else {
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <section id="contactus">
      <div className="contactus__left">
        <h6 className="subtitle">Contact Us</h6>
        <h2>Transforming Visions</h2>
        <h2 className="highlight">Into Reality</h2>
        <p className="description">
          If you have any questions, feel free to reach out to us by filling out
          the form. We're here to help!
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
        <form onSubmit={handleSubmit}>
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
      <ToastContainer />
    </section>
  );
};

export default ContactUs;
