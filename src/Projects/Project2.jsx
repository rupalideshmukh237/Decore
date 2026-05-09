import React from "react";
import ProjectLayout from "./ProjectLayout";

const Project2 = () => {

  const galleryImages = [
    "https://decor24.in/wp-content/uploads/2026/04/IMG_3286-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_3282-1536x1152.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_3277-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_3254-scaled.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_3252-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_3249-scaled.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_3231-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_3224-1536x2048.jpg"
  ];

  return (
    <ProjectLayout
      heroImage="https://decor24.in/wp-content/uploads/2025/04/Priya-02.jpeg"
      title="2-BHK at Sun City Ambegaon"
      description="Premium luxury interior with warm aesthetics."
      location="Ambegaon"
      type="Minimalistic"
      area="2500 sq.ft"
      galleryImages={galleryImages}
    />
  );
};

export default Project2;