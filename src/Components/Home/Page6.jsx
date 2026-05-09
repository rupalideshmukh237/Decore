import React from 'react'
import './Page6.css'
import Footer from '../Footer/Footer';
const Page6 = () => {
     const faqs = [
    "DO I NEED TO PAY FOR THE INITIAL DESIGN AND 3D WALKTHROUGHS?",
    "HOW LONG DOES IT TAKE TO PREPARE THE INITIAL DESIGN AND 3D VIEWS?",
    "CAN I REQUEST MODIFICATIONS AFTER SEEING THE 3D VIEWS?",
"WHAT HAPPENS AFTER I SIGN UP AND PAY THE TOKEN ADVANCE?",
"HOW LONG DOES THE SITE EXECUTION TAKE?",
"DO YOU OFFER A WARRANTY ON YOUR WORK?"
  ];

  return (
    
    <div className="faq-page">
      

      <section className="faq-section">
        <h1>
          Frequently Asked <br /> Questions<span>[FAQ]<span></span></span>
        </h1>

        <p>
          Still have questions? We’re happy to help! If you don’t find your answer
          below, just drop us a mail at <a href="#">contact@decor24.in</a> or give us a call at +91
          1234567890 — we’d love to hear from you!
        </p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <span className="arrow">⌄</span>
              <span className={`question q${index + 1}`}>{item}</span>
            </div>
          ))}
        </div>
      </section>

       <Footer/> 
    </div>
  )
}

export default Page6
