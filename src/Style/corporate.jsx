import React from "react";
import "./corporate.css";

const Corporate= () => {
  return (
    <div className="corporate-page">
    
      <section className="hero1">
        <div className="hero1-content">
          <h1>Corporate</h1>
          <button>Shop Now</button>
        </div>
      </section>

    
      <section className="featured">
        <h2>Featured Items</h2>
        <div className="grid">
          <div className="card">
            <img src="https://i.pinimg.com/1200x/b5/30/af/b530af74331d81a73cea533dbe69f858.jpg" alt="Suit" />
            <p>Formal Suit</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/99/45/ab/9945abb49e5d8c9e77aef936a32d27b1.jpg" alt="Skirt" />
            <p>Pencil Skirt</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/8c/bf/95/8cbf9503abb8756dd73fadcc6141a108.jpg" alt="Shoes" />
            <p>Classic Heels</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/1200x/bf/79/00/bf79008d39f796456bf0d85dd8cf681b.jpg" alt="Dress" />
            <p>Office Dress</p>
          </div>
        </div>
      </section>

      <section className="shop-category">
        <h2>Shop by Category</h2>
        <div className="buttons">
          <button>Formal Suits</button>
          <button>Office Dresses</button>
          <button>Accessories</button>
        </div>
      </section>

      
      <section className="lookbook">
        <img src="https://i.pinimg.com/736x/0d/dd/94/0ddd94efb8a1aaee6d63390f475dac96.jpg" alt="Lookbook" />
        <div className="lookbook-text">
          <h2>How to Dress for Work Meetings</h2>
          <p>
            Get inspired by polished outfits perfect for work meetings and corporate settings.
          </p>
          <button>View Lookbook</button>
        </div>
      </section>
    </div>
  );
}

export default Corporate;