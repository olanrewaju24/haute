import { useContext } from "react";
import React from "react";
import "./About.css";
import aboutImg from "../assets/about.avif"; // make sure you have an image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImg} alt="About Us" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to our fashion store! We believe style is a way to say who
          you are without having to speak. Our mission is to bring you the
          latest trends with a touch of timeless elegance.
        </p>
        <p>
          Every piece in our collection is carefully curated to help you feel
          confident and stylish. Thank you for being part of our journey!
        </p>
      </div>
    </div>
  );
};

export default About;
