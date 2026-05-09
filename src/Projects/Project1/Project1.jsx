import React from "react";
import ProjectLayout from "../ProjectLayout";
import './Project1.css'

const Project1 = () => {

  const galleryImages = [
    "https://decor24.in/wp-content/uploads/2026/04/IMG_1944-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_1864-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_1808-1536x1152.jpg",
    
    "https://decor24.in/wp-content/uploads/2026/04/IMG_1925-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_1924-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_1770-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_1921-1536x2048.jpg",
    "https://decor24.in/wp-content/uploads/2026/04/IMG_1870-1536x2048.jpg"
  ];

  return (
    <ProjectLayout
      heroImage="https://decor24.in/wp-content/uploads/2026/04/IMG_1948-scaled.jpg"
      title="2 BHK At Ganga Ashiyana Chinchwad"
      description="Elegant modern interiors crafted with timeless aesthetics."
      location="Chinchwad, Pune"
      type="2 BHK Apartment"
      area="950 sq.ft"
      galleryImages={galleryImages}
    />
  );
};

export default Project1;