import React from 'react'
import '../../styles/projects.css'
import Project1 from '../../images/keeper-app.PNG'

const Projects = () => {
  return (
    <section>
        <div class="container">
        <div className="project__top-content">
          <h6 className="subtitle">Our Projects</h6>
          <h2>
            Let's have a look from our
            <span className="highlight"> recent projects</span>
          </h2>
        </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>Project 1</h1>
            <h2>Keeper App</h2>
            <p>Crafted with React, Keeper App is a web-based note-taking application designed to simplify the process of creating and deleting notes. With its user-friendly interface, the app ensures a seamless and organized experience, inspired by Google Keep.</p>
          </div>
          <div class="project-img">
            <img src={Project1} alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Projects
