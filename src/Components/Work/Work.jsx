import React, { useEffect } from "react";
import "./Work.css";
import Upcoming from "./Upcoming";
import gsap from "gsap";
import {Link} from 'react-router-dom'
import Project1 from "../../Projects/Project1/Project1";
import Project2 from "../../Projects/Project2";
const projectData = [
  {
    client: "Mr. Harshal Swami",
    type: "2BHK",
    link: "http://localhost:5173/Project1",
    img: "https://decor24.in/wp-content/uploads/2025/04/Ayub-11.webp"
  },
  {
    client: "Mr. Sadawarte",
    type: "2-BHK",
    link: "http://localhost:5173/Project2",
   
    img: "https://decor24.in/wp-content/uploads/2025/04/Ayub-12.webp"
  },
  {
    client: "Mr Anil Jain",
    type: "3 BHK",
    link: "http://localhost:5173/Project3",
  
    img: "https://decor24.in/wp-content/uploads/2025/04/Ayub-12.webp"
  },
  {
    client: "Mrs. Wani",
    type: "3-BHK",
    link: "http://localhost:5173/Project4",
    img: "https://decor24.in/wp-content/uploads/2025/04/Ayub-08.webp"
  },
  {
    client: "Mr Rahul",
    type: "4-BHK Apartment",
    link: "http://localhost:5173/Project5",
    img: "https://decor24.in/wp-content/uploads/2025/04/Ayub-07.webp"
  },
  {
    client: "Mr Niket's",
    type: "2-BHK Apartment",
    link: "http://localhost:5173/Project6",
    img: "https://decor24.in/wp-content/uploads/2025/04/Ayub-05.webp"
  },
 
 
];

const Work = () => {

  useEffect(() => {
    const items = gsap.utils.toArray(".project-row");

    gsap.fromTo(
      items,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="projects-section">
      <div className="pro">

        <div className="projects-header">
          <h1>Completed Projects</h1>
          <p>
            At idecor24, we take pride in every space we’ve transformed.
            From elegant living rooms to functional kitchens, each project
            reflects our commitment to thoughtful design, quality craftsmanship,
            and client satisfaction.
          </p>
        </div>

        <div className="projects-list">
          {projectData.map((project, index) => (
            <div className="project-row" key={index}>

              <div className="project-client">{project.client}</div>
              <div className="project-type">{project.type}</div>

             <div className="project-link">
  <Link
    to={project.link} style={{background:"white", padding:"0.4rem 0.4rem" , borderRadius:"12px"}}
    onClick={() => window.scrollTo(0, 0)}
  >
    View Project
  </Link>
</div>

              {/* Hover Image */}
              <div className="project-image">
                <img src={project.img} alt="project" />
              </div>

            </div>
          ))}
        </div>

      </div>

      <Upcoming />
    </section>
  );
};

export default Work;