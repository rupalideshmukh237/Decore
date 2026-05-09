import React from "react";
import ProjectLayout from "./ProjectLayout";

const Project4 = () => {

  const galleryImages = [
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5576-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5578-1536x1152.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5551-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5538-1536x1152.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5526-1536x1152.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5462-1536x1152.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5498-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5475-scaled.jpg"
  ];

  return (
    <ProjectLayout
      heroImage="https://decor24.in/wp-content/uploads/2025/04/Priya-02.jpeg"
      title="3-BHK at Kamalraj Athens Wakad"
      description="Thank you to the Decor24 team for making our dream come true  Your imagination"


      location="Wakad"
      type="Luxury"
      area="2500 sq.ft"
      galleryImages={galleryImages}
    />
  );
};

export default Project4;