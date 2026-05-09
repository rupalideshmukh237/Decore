import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Project1.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectLayout = ({
  heroImage,
  title,
  description,
  location,
  type,
  area,
  galleryImages,
}) => {

  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const galleryRef = useRef([]);

  useEffect(() => {

    /* HERO */
    gsap.fromTo(
      heroRef.current,
      {
        y: -180,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      }
    );

    /* INFO */
    gsap.fromTo(
      infoRef.current.children,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 3,
        ease: "power3.out",
        delay: 1,
      }
    );

    /* GALLERY SCROLL ANIMATION */
    galleryRef.current.forEach((el) => {

      gsap.fromTo(
        el,
        {
          x: -120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

    });

  }, []);

  return (
    <div className="project-page">

      {/* HERO */}
      <section className="hero-section">

        <img src={heroImage} alt="" />

        <div className="hero-overlay" ref={heroRef}>
          <h1>{title}</h1>

          <p>{description}</p>
        </div>

      </section>

      {/* INFO */}
      <section className="project-info" ref={infoRef}>

        <div className="info-box">
          <h3>Location</h3>
          <p>{location}</p>
        </div>

        <div className="info-box">
          <h3>Type</h3>
          <p>{type}</p>
        </div>

        <div className="info-box">
          <h3>Area</h3>
          <p>{area}</p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-project">

        <h2>Project Images</h2>

        <p>
          This project was designed with a balance of elegance,
          comfort, and functionality.
        </p>

      </section>

      {/* GALLERY */}
      <section className="gallery-section">

        {galleryImages.map((img, index) => (
          <div
            className="gallery-box"
            key={index}
            ref={(el) => (galleryRef.current[index] = el)}
          >
            <img src={img} alt="" />
          </div>
        ))}

      </section>

    </div>
  );
};

export default ProjectLayout;