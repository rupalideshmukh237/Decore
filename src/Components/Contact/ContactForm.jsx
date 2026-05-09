import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="form-section">

      {/* Heading */}
      <div className="form-header">
        <h1>Contact Form</h1>
        <p>
          Reach out with any queries or project details — We’ll be in touch shortly.
        </p>
      </div>

      {/* Form */}
      <form className="form-container">

        {/* Row 1 */}
        <div className="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        {/* Email */}
        <input type="email" placeholder="yourname@gmail.com" />

        {/* Phone */}
        <input type="text" placeholder="+91 1234567890" />

        {/* BHK Options */}
        <div className="radio-group">
          <label><input type="radio" name="bhk" /> 4 BHK</label>
          <label><input type="radio" name="bhk" /> 3 BHK</label>
          <label><input type="radio" name="bhk" /> 2 BHK</label>
          <label><input type="radio" name="bhk" /> 1 BHK</label>
        </div>

        {/* Dropdown */}
        <select>
          <option>Interior Design</option>
          <option>Renovation</option>
          <option>Consultation</option>
        </select>

        {/* Message */}
        <textarea
          rows="4"
          placeholder="Please share your project goals, requirements, or any questions you have. We will get back to you as soon as possible."
        ></textarea>

        {/* Button */}
        <button type="submit">Send Message</button>

      </form>

    </section>
  );
};

export default ContactForm;