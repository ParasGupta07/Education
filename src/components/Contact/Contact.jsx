import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faEnvelopeOpenText, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import AnimatedText from "../AnimatedText/AnimatedText";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <section className="contact-us">
        <div className="contact-inner">
          <div className="contact-main-col">
            <div className="contact-field">
              <AnimatedText text = "Contact Us" className='tttt'/>
              <p>Feel free to reach out. We’ll get back to you as soon as possible.</p>
              <form className="contact-form">
                <input type="text" className="form-control form-group" placeholder="Name" />
                <input type="email" className="form-control form-group" placeholder="Email" />
                <input type="tel" className="form-control form-group" placeholder="Phone Number" />
                <textarea className="form-control form-group" placeholder="Message"></textarea>
                <button type="submit" className="contact_form_submit">Send Message</button>
              </form>
            </div>
          </div>

          <div className="contact-info-sec">
            <h4>Contact Info</h4>
            <div className="info-single">
              <FontAwesomeIcon icon={faHeadset} className="contact-icons"/>
              <span>+91 99999 11111</span>
            </div>
            <div className="info-single">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="contact-icons"/>
              <span>info@localhost.com</span>
            </div>
            <div className="info-single">
              <FontAwesomeIcon icon={faInfoCircle} className="contact-icons"/>
              <span>A major platform for seamless SAT preparation with assessments and analytics.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
