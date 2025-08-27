import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider"; 
import "./skincare.css";

const products = [
  {
    id: 1,
    name: "Harlee Shoulder Bag",
    image:"https://i.pinimg.com/736x/96/3e/f2/963ef2e9f403666841bd60bf222d6272.jpg",
    price: 25,
  },
  {
    id: 2,
    name: "Addisyn Shoulder Bag",
    image: " https://i.pinimg.com/736x/6f/79/6f/6f796f03eff010aa8ceb52157dd725be.jpg",
    price: 18,
  },
  {
    id: 3,
    name: "Mollie Tote Bag",
    image: "https://i.pinimg.com/736x/8a/b6/18/8ab6189790e5093218aafcb137341ac4.jpg",
    price: 20,
  },
  {
    id: 4,
    name: "Micheal Kors Bags",
    image: "https://i.pinimg.com/736x/52/01/48/520148cb6cf1a9559447eaa82ddedb5d.jpg",
    price: 14,
  },
  {
    id: 5,
    name: "Saint Laurent Cassandre Strap",
    image: "https://i.pinimg.com/736x/2d/9b/81/2d9b81a16e118a0c8f6d308daa4dfdee.jpg",
    price: 20,
  },
  {
    id: 6,
    name: "Mini Bag",
    image:"https://i.pinimg.com/736x/64/68/2c/64682ccf9cda937702f681e7d3581f99.jpg",
    price: 25,
  },
  {
    id: 7,
    name: "Addisyn Shoulder Bag",
    image: "https://i.pinimg.com/736x/57/59/c6/5759c6c6f416ea278a7f02fcf68c57b7.jpg ",
    price: 18,
  },
  {
    id: 8,
    name: "Mollie Tote Bag",
    image: "https://i.pinimg.com/736x/76/e3/de/76e3de706a485189cb88dc72c8787c79.jpg",
    price: 20,
  },
  {
    id: 9,
    name: "Micheal Kors Bags",
    image: "https://i.pinimg.com/736x/11/b0/5c/11b05c9d8db58991a3b8c862a4dd99c3.jpg",
    price: 14,
  },
  {
    id: 10,
    name: "New Fashion Vintage",
    image: "https://i.pinimg.com/736x/16/b2/f0/16b2f051aad36c59ca47df4c88493f00.jpg",
    price: 20,
  },
];

const Bags = () => {
  const { addToCart } = useContext(CartContext); 

  return (
    <div>
      <h1>DESIGNER BAGS</h1>
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

export default Bags;
