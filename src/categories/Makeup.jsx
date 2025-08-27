import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import "./skincare.css";


const products = [
    {
        id : 1,
        name: "Sephore Translucent",
        image: "https://i.pinimg.com/736x/be/d0/b8/bed0b855b7f09d0734d449b55101a79e.jpg",
        price: 5,
    },

    {
        id : 2,
        name: "Nars Foundation",
        image: "https://i.pinimg.com/1200x/3b/64/9a/3b649afd59d12009434ffd725df5df2e.jpg",
        price: 10,
    },
{
        id : 3,
        name: "Highlight contour brightening fine shimmer liquid blush stick",
        image: "https://img-va.myshopline.com/image/store/1724125818821/O1CN01B7rhrR1j1YZx8XTwZ-!!2210943534488-0-cib.jpg?w=800&h=800&q=80",
        price: 33
    },
{
        id : 4,
        name: "Diorshow Iconic Overcurl Mascara Refill",
        image: "https://i.pinimg.com/736x/5a/bf/49/5abf49bce63a3b5c0392fd6bdd4b9e25.jpg",
        price: 20
    },
{
        id : 5,
        name: "Mac lipstick",
        image: "https://i.pinimg.com/736x/70/cd/b2/70cdb22ee78c27a46c4afbdb021e4f74.jpg",
        price: 7
    },

    {
        id : 6,
        name: "Summer Fridays",
        image: "https://i.pinimg.com/736x/d9/da/4a/d9da4a7be1b1aa35329ed9ce6545a5ef.jpg",
        price: 5,
    },

    {
        id : 7,
        name: "Mac Foundation",
        image: "https://i.pinimg.com/736x/f0/55/96/f05596dcb099fee8c3139ebee9e304b0.jpg",
        price: 10,
    },
{
        id : 8,
        name: "SHEGLAM Liquid Blush",
        image: "https://i.pinimg.com/736x/48/2e/8e/482e8e0b31afefa64f19024af94a2e50.jpg",
        price: 33
    },
{
        id : 9,
        name: "Frozen Berry Bear Lip Glaze",
        image: "https://i.pinimg.com/736x/38/40/7a/38407a9d53fe5c513848a21a7bd58e7a.jpg",
        price: 20
    },
{
        id : 10,
        name: "Mac lipstick",
        image: "https://i.pinimg.com/736x/70/cd/b2/70cdb22ee78c27a46c4afbdb021e4f74.jpg",
        price: 7
    },
]


const Makeup = ()=>{
    const { addToCart } = useContext(CartContext); 

    return (
         <div>
      <h1>MAKEUP</h1>
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
    )
}

export default Makeup;