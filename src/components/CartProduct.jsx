import React from "react";
import "./CartProduct.css";


const CartProduct = ({ product, removeFromCart, increaseQty, decreaseQty }) => {
  return (
    <div className="cart-product">
      <img src={product.image} alt={product.name} width="100" />
      
      <div className="cart-details">
        <h3>{product.name}</h3>
        <p>${product.price}</p>

        <div className="cart-quantity">
          <button onClick={() => decreaseQty(product.id)}><b>-</b></button>
          <span>{product.quantity}</span>
          <button onClick={() => increaseQty(product.id)}><b>+</b></button>
        </div>

        <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
