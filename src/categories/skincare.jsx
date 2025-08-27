import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider"; 
import "./skincare.css";

const products = [
  {
    id: 1,
    name: "Moisturizer",
    image:
      "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9pc3R1cml6ZXJ8ZW58MHx8MHx8fDA%3D",
    price: 25,
  },
  {
    id: 2,
    name: "Sunscreen",
    image:
      "https://images.unsplash.com/photo-1594527964562-32ed6eb11709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vuc2NyZWVufGVufDB8fDB8fHww",
    price: 18,
  },
  {
    id: 3,
    name: "CANTONATOTO",
    image:
      "https://i.pinimg.com/736x/13/14/6c/13146c62bf5a9b75a9c2fe21cc90635c.jpg",
    price: 20,
  },
  {
    id: 4,
    name: "Cerave sunscreen",
    image:
      "https://i.pinimg.com/736x/81/66/0c/81660c02dde75a235fe5d1d877b35530.jpg",
    price: 4,
  },
  {
    id: 5,
    name: "Cerave",
    image:
      "https://i.pinimg.com/736x/f4/5a/5c/f45a5c21e54aa6ededcc46eeb7ecc98a.jpg",
    price: 20,
  },

    {
    id: 6,
    name: "Moisturizer",
    image:
      "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9pc3R1cml6ZXJ8ZW58MHx8MHx8fDA%3D",
    price: 25,
  },
  {
    id: 7,
    name: "Sunscreen",
    image:
      "https://images.unsplash.com/photo-1594527964562-32ed6eb11709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vuc2NyZWVufGVufDB8fDB8fHww",
    price: 18,
  },
  {
    id: 8,
    name: "CANTONATOTO",
    image:
      "https://i.pinimg.com/736x/13/14/6c/13146c62bf5a9b75a9c2fe21cc90635c.jpg",
    price: 20,
  },
  {
    id: 9,
    name: "Cerave sunscreen",
    image:
      "https://i.pinimg.com/736x/81/66/0c/81660c02dde75a235fe5d1d877b35530.jpg",
    price: 4,
  },
  {
    id: 10,
    name: "Cerave",
    image:
      "https://i.pinimg.com/736x/f4/5a/5c/f45a5c21e54aa6ededcc46eeb7ecc98a.jpg",
    price: 20,
  },

];

const Skincare = () => {
  const { addToCart } = useContext(CartContext); 

  return (
    <div className="container">
      <h1>Skincare Products</h1>
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

export default Skincare;
