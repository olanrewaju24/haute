import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Features/ContextProvider";
import "./Cart.css";


const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-items">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-details">
              <img src={item.image} alt={item.name} width="100" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary">
        <h2>Summary</h2>
        <p>
          Estimated total: <b>${total.toFixed(2)}</b>
        </p>
        <button className="checkout-btn">Checkout ({cart.length})</button>
      </div>
    </div>
  );
};

export default Cart;
