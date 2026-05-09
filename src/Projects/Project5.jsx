import React from "react";
import ProjectLayout from "./ProjectLayout";

const Project5 = () => {

  const galleryImages = [
    "https://decor24.in/wp-content/uploads/2025/04/DSC_94962-1536x864.webp",
    "https://decor24.in/wp-content/uploads/2025/04/DSC_95342-scaled-e1743693823864-1536x1421.webp",
    "https://decor24.in/wp-content/uploads/2025/04/DSC_94812-1536x1025.webp",
    "https://decor24.in/wp-content/uploads/2025/04/DSC_95922-1536x1025.webp",
    "https://decor24.in/wp-content/uploads/2025/04/DSC_96172-1536x864.webp",
    "https://decor24.in/wp-content/uploads/2025/04/DSC_96532-1536x1025.webp",
    "https://decor24.in/wp-content/uploads/2025/04/DSC_94942-1536x864.webp",
    "https://decor24.in/wp-content/uploads/2025/04/DSC_96032-1536x864.webp"
  ];

  return (
    <ProjectLayout
      heroImage="https://decor24.in/wp-content/uploads/2025/04/Priya-02.jpeg"
      title="Mr Rahul Vikhore’s
        4 BHK Apartment"
      description="From concept to execution, Decor24 handled everything seamlessly. Our home now feels luxurious and personal. Great experience overall."


      location="Balewadi, Pune"
      type="Scandinavian"
      area="2500 sq.ft"
      galleryImages={galleryImages}
    />
  );
};

export default Project5;