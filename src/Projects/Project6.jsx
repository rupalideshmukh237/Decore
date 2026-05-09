import React from "react";
import ProjectLayout from "./ProjectLayout";

const Project6 = () => {

  const galleryImages = [
    "https://decor24.in/wp-content/uploads/2025/05/DSC_04702-1536x1025.webp",
    "https://decor24.in/wp-content/uploads/2025/05/DSC_04232-1536x1025.webp",
    "https://decor24.in/wp-content/uploads/2025/05/DSC_05022-1367x2048.webp",
    "https://decor24.in/wp-content/uploads/2025/05/DSC_04322-1536x1025.webp",
    "https://decor24.in/wp-content/uploads/2025/05/DSC_05392-1367x2048.webp",
    "https://decor24.in/wp-content/uploads/2025/05/DSC_04842-1536x1025.webp",
    "https://decor24.in/wp-content/uploads/2025/05/DSC_03992-1536x1025.webp",
    "https://decor24.in/wp-content/uploads/2025/05/DSC_03902-1536x1025.webp"
  ];

  return (
    <ProjectLayout
      heroImage="https://decor24.in/wp-content/uploads/2025/04/Priya-02.jpeg"
      title="2 BHK Apartment-Mr Niket’s"
      description="Decor24 brought our dream home to life. Their attention to detail and commitment to timelines impressed us. The design reflects both functionality and elegance"


      location="Rahatni, Pune"
      type="Scandinavian"
      area="2500 sq.ft"
      galleryImages={galleryImages}
    />
  );
};

export default Project6;