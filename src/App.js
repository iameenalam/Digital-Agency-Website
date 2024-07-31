import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';
import Testimonial from './components/UI/Testimonial';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/Footer/Footer';
import Projects from './components/UI/Projects';
import ContactUs from './components/UI/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

const HomePage = () => (
  <>
    <section id="home">
      <Hero />
      <Counter />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="team">
      <Team />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="blog">
      <Blog />
    </section>
    <Testimonial />
    <Newsletter />
    <Footer />
  </>
);

const ContactUsPage = () => (
  <>
    <ContactUs />
    <Newsletter />
    <Footer />
  </>
);

export default App;
