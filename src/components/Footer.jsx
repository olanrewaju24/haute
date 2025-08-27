import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer>
      <h2>Haute Thread</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Haute Thread. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
