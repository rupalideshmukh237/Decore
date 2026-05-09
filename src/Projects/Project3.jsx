import React from "react";
import ProjectLayout from "./ProjectLayout";

const Project3 = () => {

  const galleryImages = [
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5784-1536x1152.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5788-2-1536x1152.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5783-1536x1152.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5780-scaled.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5753-scaled.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5724-1536x1152.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5725-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_5671-1536x1152.jpg"
  ];

  return (
    <ProjectLayout
      heroImage="https://decor24.in/wp-content/uploads/2025/04/Priya-02.jpeg"
      title="3-BHK at Kalpataru Exquisite Wakad"
      description="Thank you to the Decor24 team for making our dream come true  Your imagination"


      location="Wakad"
      type="Modern Contemporary"
      area="2500 sq.ft"
      galleryImages={galleryImages}
    />
  );
};

export default Project3;