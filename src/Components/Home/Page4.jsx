import React from "react";
import "./Page4.css";
import { FaClock, FaPhoneAlt, FaClipboardList } from "react-icons/fa";
import Page5 from "./Page5";
const Page4 = () => {
  return (
    <div className="">
    <div>
      <div className="page4_container">
        <div className="head">
          <h2>
            Experience The Decor24 <h6>Advantage [WHY US]</h6>{" "}
          </h2>
          <p>
            Great design goes beyond aesthetics—it’s about a seamless
            experience. At Decor24, our approach ensures every project is
            smooth, satisfying, and truly exceptional. Discover what makes us
            stand out.
          </p>
        </div>
        <div className="cards-grid">
          {/* Card 1 */}
          <div className="card satisfaction-card">
            <h3>Satisfaction</h3>
            <div className="big-number">100%</div>
            <span className="tag">Transparency</span>
          </div>

          {/* Card 2 */}
          <div className="card completion-card">
            <div className="icons">
              <FaClock />
              <FaPhoneAlt />
              <FaClipboardList />
            </div>
            <div className="text-content">
              <p>
                Any successful project thrives on timely execution. We respect
                your deadlines, meticulously planning every stage to ensure your
                project is completed on schedule — without compromising quality
                or attention to detail.
              </p>
              <h2>On Time Completion</h2>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card quality-card">
            <div className="mini-cards">
              <div>Finest Materials</div>
              <div>Skilled Labours</div>
              <div>Latest Tech</div>
            </div>
            <h2>Quality Work</h2>
            <p>
              Excellence is at the heart of everything we do. At Decor24, we
              ensure every detail meets the highest standards, creating
              interiors that are not just beautiful but built to last.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card experience-card">
            <div className="big-number">25+</div>
            <p>Years of Individual Experience</p>
          </div>
        </div>
      </div>
     </div>
     <Page5/>
    </div>
  );
};

export default Page4;
