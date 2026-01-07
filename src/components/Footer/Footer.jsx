import React from "react";
import "./Footer.css";
import CircleBackground from "../Backgrounds/CircleBackground";

const Footer = () => {
  return (
    <footer className="footer">
      <CircleBackground />
      <div className="footer-content">
        <h2 className="footer-title">THANK YOU<br />For Visiting Our Website</h2>
        <div className="footer-columns">
          <div className="footer-col col1">
            <h3 className="footer-heading">RVGo</h3>
            <p className="footer-small">
              Made with <span style={{ color: "#BA6573" }}>❤</span>
            </p>
            <div className="footer-social">
              <a href="#" target="_blank" rel="noreferrer" className="footer-link">
                <img
                  src="https://assets.codepen.io/9051928/codepen_1.png"
                  alt="Codepen"
                  className="footer-img"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="footer-link">
                <img
                  src="https://assets.codepen.io/9051928/x.png"
                  alt="Twitter"
                  className="footer-img"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="footer-link">
                <img
                  src="https://assets.codepen.io/9051928/youtube_1.png"
                  alt="YouTube"
                  className="footer-img"
                />
              </a>
            </div>
            <p className="footer-copy">
              {new Date().getFullYear()} RVGo © All Rights Reserved
            </p>
          </div>
          <div className="footer-col col2">
            <h3 className="footer-heading">What We Provide ?</h3>
            <p>Personal Mentorship</p>
            <p>Digital Test Practice Platform</p>
            <p>Access To Multiple Tests</p>
            <p>SAT Coachings</p>
          </div>
          <div className="footer-col2 col3">
            <form className="footer-newsletter-form">
              <span className="footer-newsletter-title">
                Subscribe to our newsletter.
              </span>
              <p className="footer-newsletter-description">
                Get the latest updates, mentorship news, and more delivered
                straight to your inbox.
              </p>
              <div className="footer-newsletter-input-group">
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  id="email-address"
                  className="footer-newsletter-input"
                />
                <button type="submit" className="footer-newsletter-button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
