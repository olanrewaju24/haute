import React from "react";
import "./Dinner.css";

const Dinner= () => {
  return (
    <div className="dinner-page">
      <div className="hero-split">
      <div className="hero-text">
        <h1>Dinner Wear</h1>
        <p>
          Discover elegant outfits for your evenings — from cocktail dresses to
          glamorous gowns.
        </p>
        <button>Shop Now</button>
      </div>

      {/* Right Side - Image */}
      <div className="hero-image">
        <img
          src="https://i.pinimg.com/736x/7e/aa/82/7eaa82ac9533263efe2430674d816911.jpg"
          alt="Dinner Wear"
        />
      </div>
    </div>
      {/*  this is the Featured Items */}
      <section className="featured">
        <h2>Featured Items</h2>
        <div className="grid">
          <div className="card">
            <img src="https://i.pinimg.com/736x/49/87/68/498768d12df6d9d25a552f4d09b5729f.jpg" alt="Suit" />
           
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/f6/dc/c0/f6dcc0bbc0415cb5a0703ee404e9dbd1.jpg" alt="Skirt" />
      
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/12/6e/71/126e717d821f124134db21b5d10760f7.jpg" alt="Shoes" />
          
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/38/3c/fa/383cfa96cb9fd6307c1c8c15eb6af463.jpg" alt="Dress" />
            
          </div>
        </div>
      </section>

      <section className="shop-category">
        <h2>Shop by Category</h2>
        <div className="buttons">
          <button>Cocktail Dresses</button>
          <button>Evening Gowns</button>
          <button>Accessories</button>
        </div>
      </section>

      
      <section className="lookbook">
        <img src="https://i.pinimg.com/736x/e3/2b/d5/e32bd52b106871047feb0e451e29a931.jpg" alt="Lookbook" />
        <div className="lookbook-text">
          <h2>Dressing for Date Night or Events</h2>
          <p>
            Discover chic outfits ideas for dinner dates, cocktail parties, and formal events
          </p>
          <button>View Lookbook</button>
        </div>
      </section>
    </div>
  );
}

export default Dinner;