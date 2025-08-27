import React from "react";
import "./About.css";
import aboutImage from "../assets/about.avif";

const About = () => {
  return (
    <section className="about-section">
        <h1 className='about-heading'>Brand Story/ About Us</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Our brand story" />
        </div>
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Born from a passion for timeless elegance and modern edge, our brand
            celebrates individuality through fashion. Every piece is designed
            with care, crafted to make you feel confident, bold, and unapologetically you.
          </p>
          <p>
            From sketch to runway, we believe style is more than clothing —
            it’s self-expression.
          </p>
          <a href="/shop" className="about-button">Explore Our Collection</a>
        </div>
      </div>
    </section>
  );
};

export default About;
