import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-box">

        <div className="footer-top">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          <a href="#">Sitemap</a>
        </div>

        <div className="footer-middle">
          <h1>DECOR24</h1>

          <div className="footer-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright - Decor24 | All Rights Reserved</p>
          <p>Thank You!!!!</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;