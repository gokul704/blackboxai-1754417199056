import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Visit Us</h3>
            <p>188 S Monterey St #106<br />Alhambra, CA 91801</p>
            <p><strong>Hours</strong><br />Monday–Sunday<br />6am - 6pm</p>
          </div>
          <div className="footer-map">
            <div className="map-placeholder">
              <p>Map Location</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Made by Solace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
