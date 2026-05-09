import React from "react";
import "./Page5.css";
import Page6 from "./Page6";
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="page5_container">
    <section className="projects-section">
      
      {/* Heading */}
      <div className="projects-header">
        <h1>
          A Glimpse Into Our <br />
          Work <span>[PROJECTS]</span>
        </h1>
0%
        <p>
          With over 20 completed projects and 50+ unique designs delivered,
          each project is a testament to our commitment to quality and
          creativity. Take a look at some of our featured designs and see how
          we turn ideas into beautifully crafted spaces.
        </p>
      </div>

      {/* Images Grid */}
      <div className="projects-grid">
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="project1"
          />
        </div>

        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156"
            alt="project2"
          />
        </div>
        <div className="project-card">
          <img
            src="https://decor24.in/wp-content/uploads/2026/04/IMG_1948-1536x1152.jpg"
            alt="project2"
          />
        </div>
         <div className="project-card">
          <img
            src="https://decor24.in/wp-content/uploads/2026/04/IMG_1925-1536x2048.jpg"
            alt="project2"
          />
        </div>
        <button className="viewbtn" ><Link to="/Work" onClick={() => window.scrollTo(0,0)} className="react_link">VIEW ALL PROJECTS</Link></button>
      </div>
    </section>
    <Page6/>
    </div>
  );
};

export default Projects;