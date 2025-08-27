import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider"; 
import "./skincare.css";

const products = [
  {
    id: 1,
    name: "Tropfen Ohrringe Gold",
    image:"https://i.pinimg.com/736x/38/74/2c/38742ce0143394be9a63bf949c658445.jpg",
    price: 35,
  },
  {
    id: 2,
    name: "Cubojue Unisex Reading Glasses",
    image: "https://i.pinimg.com/736x/89/62/f9/8962f909bbeacc84530bedb569a7a346.jpg",
    price: 18,
  },
  {
    id: 3,
    name: "Tassel Hair Clip",
    image: "https://i.pinimg.com/736x/60/dc/b1/60dcb10cee7cddcdea53d7d9f3a54a1d.jpg",
    price: 5
  },
  {
    id: 4,
    name: "Satin Ribbon Hair Tie",
    image: "https://i.pinimg.com/736x/07/59/64/075964cf90bd968a64b34ef1c52c3045.jpg",
    price: 14,
  },
  {
    id: 5,
    name: "Vlando Jewelry Box",
    image: "https://i.pinimg.com/736x/3b/c9/d3/3bc9d3ac6039e9caa6cadbb949bf21ee.jpg",
    price: 20,
  },
  {
    id: 6,
    name: "Buckle Decor Baker Boy Caap",
    image:"https://i.pinimg.com/1200x/bd/07/f3/bd07f3e82f1586f9e3b73ef7fbc4b4cd.jpg",
    price: 35,
  },
  {
    id: 7,
    name: "Cuff",
    image: "https://i.pinimg.com/736x/26/9e/4c/269e4cdc443640160616589f59d41281.jpg",
    price: 18,
  },
  {
    id: 8,
    name: "Earrings",
    image: "https://i.pinimg.com/736x/de/3f/9e/de3f9ee9d9b6c5d719a652da8417fc91.jpg",
    price: 5
  },
  {
    id: 9,
    name: "Eve glasses",
    image: "https://i.pinimg.com/736x/c3/5f/8a/c35f8af30060b4a49e1717088498d173.jpg",
    price: 14,
  },
  {
    id: 10,
    name: "Japanese style Beret",
    image: "https://i.pinimg.com/736x/a9/2f/37/a92f376bc2d0b9ca708fff5df7b38819.jpg",
    price: 20,
  },
];

const Accessories = () => {
  const { addToCart } = useContext(CartContext); 

  return (
    <div className="container">
      <h1>Acessories</h1>
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

export default Accessories;
