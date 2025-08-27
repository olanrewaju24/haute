import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider"; 
import "./skincare.css";

const products = [
  {
    id: 1,
    name: "Chunky Loafers",
    image:"https://i.pinimg.com/736x/fd/f4/7c/fdf47ca310af1d099958cde02beb909e.jpg",
    price: 35,
  },
  {
    id: 2,
    name: "Over-knees Heels",
    image: "https://i.pinimg.com/736x/5f/68/2b/5f682bf0f34206e425a2a2e354fab21e.jpg",
    price: 18,
  },
  {
    id: 3,
    name: "Mary jones Platform heels",
    image: "https://i.pinimg.com/1200x/38/fc/0f/38fc0f5660d76927bdad1e5e608455dc.jpg",
    price: 5
  },
  {
    id: 4,
    name: "Goth Crocs",
    image: "https://i.pinimg.com/1200x/a3/cf/6d/a3cf6df8ccc9c1ab618d3f6c500e0a81.jpg",
    price: 14,
  },
  {
    id: 5,
    name: "Platform Sneakers",
    image: "https://i.pinimg.com/1200x/ae/dd/b7/aeddb78909be69e1cbbc747f93f0033b.jpg",
    price: 20,
  },
  {
    id: 6,
    name: "Boots",
    image:"https://i.pinimg.com/736x/3a/c8/ef/3ac8ef823d27defb48d3e91bbf7a4b2e.jpg",
    price: 35,
  },
  {
    id: 7,
    name: "Sneakers",
    image: "https://i.pinimg.com/736x/1b/4f/9d/1b4f9d4d3d0cdb87c4f91446d5e6a5e0.jpg",
    price: 18,
  },
  {
    id: 8,
    name: "Mary jones Platform heels",
    image: "https://i.pinimg.com/736x/c8/56/76/c856764a6ce75240cf6300178946e2a1.jpg",
    price: 5
  },
  {
    id: 9,
    name: "Slides",
    image: "https://i.pinimg.com/1200x/3e/64/97/3e64975364a71cdd74a0b3c867db62d2.jpg",
    price: 14,
  },
  {
    id: 10,
    name: "Platform Slippers",
    image: "https://i.pinimg.com/736x/98/78/6b/98786b499e6afbf0c73bbdb46aa40fdf.jpg",
    price: 20,
  },

  
];

const Shoes = () => {
  const { addToCart } = useContext(CartContext); 

  return (
    <div>
      <h1>FOOTWEARS</h1>
      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="product">
            <img src={p.image} alt={p.name} width="200" />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
