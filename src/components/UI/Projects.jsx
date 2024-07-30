import React from "react";
import Slider from "react-slick";
import "../../styles/projects.css";
import Project1 from "../../images/keeper-app.PNG";
import Project2 from "../../images/tin-dog.PNG";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="project__top-content">
          <h6 className="subtitle">Our Projects</h6>
          <h2>
            These are some of our
            <span className="highlight"> recent projects</span>
          </h2>
        </div>
        <Slider {...settings} className="all-projects">
          <div className="project-item">
            <div className="project-info">
              <h1>Project 1</h1>
              <h2>Keeper-App</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessbus cupppiditate modi consequuntur explicabo magnam!
              </p>
              <div className="project-icons">
                <span>
                  <a
                    href="https://ameenz-keeper-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-earth-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/iameenalam/Keeper-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="project-img">
              <img src={Project1} alt="Keeper App" />
            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <h1>Project 2</h1>
              <h2>TinDog</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessbus cupppiditate modi consequuntur explicabo magnam!
              </p>
              <div className="project-icons">
                <span>
                  <a
                    href="https://tin-dog-startup-website.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-earth-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/iameenalam/TinDog-Startup-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="project-img">
              <img src={Project2} alt="TinDog" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
