import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_kvdlh9m', 'template_2m1n4pp', { email }, '1PfYKSBlQ8x4bdm_V')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Subscription successful!');
      }, (err) => {
        console.log('FAILED...', err);
        toast.error('Subscription failed. Please try again.');
      });
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h6 className="subtitle">Let's work</h6>
            <h2>Explore the <span className="highlight">hidden</span> ideas and subscribe!</h2>
          </div>
          <form className="newsletter__form" onSubmit={sendEmail}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <button className="secondary__btn" type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Newsletter;
