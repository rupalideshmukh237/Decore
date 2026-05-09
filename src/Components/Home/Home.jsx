import React, { useEffect, useRef } from "react";
import "./Home.css";
import Page2 from "./Page2";
import { Link } from 'react-router-dom'
import gsap from "gsap";
const Home = () => {
  const homeimgref=useRef()
  useEffect(() => {
  gsap.fromTo(homeimgref.current,
    {
      x: 0,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1
    }
  );
}, []);
  return (
    <div className="">
    <div className="home_container">
      <div className="left">
        <div className="left_inner">
          <div className="img" >
            <img ref={homeimgref}
              src="https://decor24.in/wp-content/uploads/2025/05/DSC_03222-1024x684.webp"
              alt=""
            />
            <div className="content">
              <p>
                Transforming residential spaces with bespoke interiors, creating
                experiences that inspire and elevate everyday living.
              </p>
              <br />
              <button className="book"> <Link className="react_link" to="/Contact">BOOK 3D WALK THROUGH</Link> </button>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll">
        <svg viewBox="0 0 200 200" className="circular-text">
          <defs>
            <path
              id="circlePath"
              d="
          M 100, 100
          m -75, 0
          a 75,75 0 1,1 150,0
          a 75,75 0 1,1 -150,0
        "
            />
          </defs>

          <text
            fill="gray"
            fontSize="20"
            fontFamily="medium"
            letterSpacing="1.4px"
          >
            <textPath href="#circlePath">
              |SCROLL TO ENTER | SCROLL TO ENTER
            </textPath>
          </text>
        </svg>
      </div>
      <div className="right">
        <img
          src="https://decor24.in/wp-content/uploads/2025/05/DSC_02832-1024x684.webp"
          alt=""
        />
      </div>
      
    </div>
    <Page2 />
    
   
    </div>
  );

};

export default Home;
