import React from 'react'
import '../../styles/hero.css'
import heroDarkImg from '../../images/hero-img.png'

const Hero = () => {
  return (
    <section className='hero__section'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <div>
                <h2>We Create Websites &</h2>
                <h2>Analyze Your Data</h2>
                <h2 className="highlight">For The Growth Of Your Business</h2>
                </div>
                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque hic id rem quidem, animi deserunt!</p>

                <div className="hero__btns">
                    <button className="primary__btn">Get Started Now</button>
                    <button className="secondary__btn">Discover More</button>
                </div>
            </div>
            
            <div className="hero__img">
            <img src={heroDarkImg} alt="hero-img" />
            </div>
        </div>
    </div>
    </section>
  );
}

// const handleGetStartedClick = () => {
//   window.location.href = 'https://www.xxx.com'; // Replace with your desired URL
// };

// const handleDiscoverMoreClick = () => {
//   window.location.href = 'https://xxx.com'; // Replace with your desired URL
// };

// <button className="primary__btn" onClick={handleGetStartedClick}>Get Started Now</button>
// <button className="secondary__btn" onClick={handleDiscoverMoreClick}>Discover More</button>

export default Hero
