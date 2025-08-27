import React from "react";
import "./casual.css";

const Casual= () => {
  return (
    <div className="casual-page">
      <section className="hero2">
        <div className="hero2-content">
          <h1>Casual</h1>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Featured Items */}
      <section className="featured">
        <h2>Featured Items</h2>
        <div className="grid">
          <div className="card">
            <img src="https://i.pinimg.com/736x/15/ce/d6/15ced69d4929cc8d7423149feda2c774.jpg" alt="Suit" />
            <p>Shorts</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/9e/7d/b0/9e7db0f6662776b3f25d3409ee60a9fc.jpg" alt="Skirt" />
            <p>Gowns</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/ab/94/77/ab9477826708ce854e4e5b08cc7df193.jpg" alt="Shoes" />
            <p>Sandals</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/13/d1/e9/13d1e907c22d666d334162b34b420f55.jpg" alt="Dress" />
            <p>Skirts </p>
          </div>
        </div>
      </section>

      <section className="shop-category">
        <h2>Shop by Category</h2>
        <div className="buttons">
          <button>Weekend fits</button>
          <button>Everyday Dresses</button>
          <button>Denim</button>
        </div>
      </section>

      
      <section className="lookbook">
        <img src="https://i.pinimg.com/736x/a5/11/6b/a5116bcaf6f14be6fb69909e65a65279.jpg" alt="Lookbook" />
        <div className="lookbook-text">
          <h2>Effortless Everyday Outfits</h2>
          <p>
            Find simple, stylish looks for casual day amd relaxed weekends.
          </p>
          <button>View Lookbook</button>
        </div>
      </section>
    </div>
  );
}

export default Casual;