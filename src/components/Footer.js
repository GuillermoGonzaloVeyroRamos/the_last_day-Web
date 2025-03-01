import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About</h3>
          <ul className="footer-links">
            <li><a href="#about">About the Game</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <ul className="footer-links">
            <li><a href="#discord">Discord</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#help">Help Center</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 The Last Day. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
