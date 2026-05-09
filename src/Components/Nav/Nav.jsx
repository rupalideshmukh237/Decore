import React, { useRef, useEffect } from 'react';
import './Nav.css';
import { RiMenuFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import { Link, useLocation } from 'react-router-dom'; // ✅ fixed

const Nav = () => {

  const data = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" }
  ];

  const navref = useRef();
  const location = useLocation(); // ✅ correct

  const menuclick = () => {
    gsap.to(navref.current, {
      right: "2%",
      duration: 0.2
    });
  };

  const closeMenu = () => {
    gsap.to(navref.current, {
      right: "-400px",
      duration: 0.2
    });
  };

  // ✅ Close on scroll
  useEffect(() => {
    const handleScroll = () => closeMenu();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close on page change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <div>
      <div className='nav'>

        <div className="logo">
          <img
            src="https://decor24.in/wp-content/uploads/2025/03/decor24logo.png.webp"
            alt="Logo"
          />
        </div>

        <div className="right_section">
          {/* ✅ fixed (no reload) */}
          <a href="https://web.whatsapp.com/"
            className="btn-flip"
            data-front="WhatsApp"
            data-back="WhatsApp"
          ></a>

          <div className="menu" onClick={menuclick}>
            <RiMenuFill className='menu_logo' />
          </div>
        </div>

        <div ref={navref} className="side_nav">

          <div className="close">
            <button className='close_icon' onClick={closeMenu}>
              <IoClose />
            </button>
          </div>

          <div className="links">
            {data.map((i, index) => (
              <ul className="linked" key={index}>
                <li>
                  <Link
                    className='linking'
                    to={i.path}
                    onClick={closeMenu}
                  >
                    {i.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>

          <div className="fav_icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>

          <div className="details">
            <h2>+1234567890</h2>
            <h2>info@1234589322</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nav;