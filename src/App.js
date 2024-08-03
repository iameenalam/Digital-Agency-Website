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
import SlideUpWrapper from './components/SlideUpWrapper';

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
      <SlideUpWrapper>
        <Hero />
      </SlideUpWrapper>
    </section>
    <section id="services">
      <SlideUpWrapper>
        <Services />
      </SlideUpWrapper>
    </section>
    <section id="about">
      <SlideUpWrapper>
        <About />
      </SlideUpWrapper>
    </section>
    <section id="about">
      <SlideUpWrapper>
        <Counter />
      </SlideUpWrapper>
    </section>
    {/* <section id="team">
      <SlideUpWrapper>
        <Team />
      </SlideUpWrapper>
    </section> */}
    <section id="projects">
      <SlideUpWrapper>
        <Projects />
      </SlideUpWrapper>
    </section>
    <section id="blog">
      <SlideUpWrapper>
        <Blog />
      </SlideUpWrapper>
    </section>
    <SlideUpWrapper>
      <Testimonial />
    </SlideUpWrapper>
    <SlideUpWrapper>
      <Newsletter />
    </SlideUpWrapper>
    <SlideUpWrapper>
      <Footer />
    </SlideUpWrapper>
  </>
);

const ContactUsPage = () => (
  <>
    <SlideUpWrapper>
      <ContactUs />
    </SlideUpWrapper>
    <SlideUpWrapper>
      <Newsletter />
    </SlideUpWrapper>
    <SlideUpWrapper>
      <Footer />
    </SlideUpWrapper>
  </>
);

export default App;
