import React, {useEffect, useState} from "react";
import "./corporate.css";

const Corporate = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from Fake Store API
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/category/women's clothing")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Limit to 4 products for Featured section
  //       setProducts(data.slice(0, 4));
  //     })
  //     .catch((err) => console.error("Error fetching products:", err));
  // }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);

        // Shuffle the products randomly
        const shuffled = [...data].sort(() => 0.5 - Math.random());

        // Pick the first 4 from the shuffled list
        setProducts(shuffled.slice(0, 4));
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);


  return (
    <div className="corporate-page">
      {/* Hero Section */}
      <section className="hero1">
        <div className="hero1-content">
          <h1>Corporate</h1>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Featured Items */}
      <section className="featured">
        <h2>Featured Items</h2>
        <div className="grid">
          {products.length > 0 ? (
            products.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
            ))
          ) : (
            <p>Loading featured products...</p>
          )}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="shop-category">
        <h2>Shop by Category</h2>
        <div className="buttons">
          <button>Formal Suits</button>
          <button>Office Dresses</button>
          <button>Accessories</button>
        </div>
      </section>

      {/* Lookbook */}
      <section className="lookbook">
        <img
          src="https://i.pinimg.com/736x/0d/dd/94/0ddd94efb8a1aaee6d63390f475dac96.jpg"
          alt="Lookbook"
        />
        <div className="lookbook-text">
          <h2>How to Dress for Work Meetings</h2>
          <p>
            Get inspired by polished outfits perfect for work meetings and
            corporate settings.
          </p>
          <button>View Lookbook</button>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
