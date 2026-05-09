import React from "react";
import "./Upcoming.css";
import Footer from '../Footer/Footer';
const images = [
  "https://decor24.in/wp-content/uploads/2025/04/Vaibhav-04.webp",
  "https://decor24.in/wp-content/uploads/2025/04/Tejas-03.jpeg",
  "https://decor24.in/wp-content/uploads/2025/04/Vaibhav-01.webp",
  "https://decor24.in/wp-content/uploads/2025/04/Vaibhav-03.webp",
  "https://decor24.in/wp-content/uploads/2025/04/Tejas-04.jpeg",
  "https://decor24.in/wp-content/uploads/2025/04/Tejas-01.jpeg",
  "https://decor24.in/wp-content/uploads/2025/04/Sandeep-01.webp",
  "https://decor24.in/wp-content/uploads/2025/04/PriyankaK-02.webp",
  "https://decor24.in/wp-content/uploads/2025/04/Sanjay-05.webp",
  "https://decor24.in/wp-content/uploads/2025/04/Sanjay-04.webp",
  "https://decor24.in/wp-content/uploads/2025/04/Sanjay-03.webp",
  "https://decor24.in/wp-content/uploads/2025/04/Satish-02.webp",
  "https://decor24.in/wp-content/uploads/2025/04/Priya-03.jpeg",
  "https://decor24.in/wp-content/uploads/2025/04/Priya-02.jpeg",
  "https://decor24.in/wp-content/uploads/2025/04/Prithviraj-04.jpeg",
  "https://decor24.in/wp-content/uploads/2025/04/Priya-07.jpeg",
  "https://decor24.in/wp-content/uploads/2025/04/Priya-04.jpeg",
  "https://decor24.in/wp-content/uploads/2025/04/Priya-01.jpeg",
 

];

const Upcoming = () => {
  return (
    <section className="upcoming">
      
      {/* Heading */}
      <div className="upcoming-header">
        <h1>
          Upcoming Projects <span>[&</span>
          <br />
          <em>RENDERS</em>
          <span>]</span>
        </h1>

        <p>
          A peek into what’s coming next. These 3D renders and ongoing projects
          represent our latest creative ideas and designs in progress. From
          concept to execution, they showcase the exciting directions we’re
          exploring for future spaces.
        </p>
      </div>

      {/* Images */}
      <div className="upcoming-gallery">
        {images.map((img, index) => (
          <div className="image-box" key={index}>
            <img src={`${img}?w=800`} alt="project" />
          </div>
        ))}
      </div>
<Footer/>
    </section>
  );
};

export default Upcoming;