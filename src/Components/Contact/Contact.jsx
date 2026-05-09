import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact-section">

      {/* TOP HEADING */}
      <div className="contact-hero">
        <h1>
          Let’s create something <br />
          great — <span>GET IN TOUCH</span> <br />
          & book your free <br />
          walkthrough.
        </h1>
      </div>

      {/* DETAILS */}
      <div className="contact-details">

        {/* CONTACT */}
        <div className="contact-box">
          <p className="label">[CONTACT]</p>
          <p>1234567890</p>
          <p>0987654321</p>
        </div>

        {/* ADDRESS */}
        <div className="contact-box">
          <p className="label">[ADDRESS]</p>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          </p>
        </div>

        {/* EMAIL */}
        <div className="contact-box">
          <p className="label">[EMAIL]</p>
          <p>abc1234@gmail.com</p>
        </div>

        {/* SOCIALS */}
        <div className="contact-box">
          <p className="label">[SOCIALS]</p>
          <div className="social-icons">
            <div className="circle">IG</div>
            <div className="circle">YT</div>
          </div>
        </div>

      </div>
<ContactForm/>
    </section>
  );
};

export default Contact;