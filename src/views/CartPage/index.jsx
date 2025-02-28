import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css"; 

const CartPage = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your cart is empty</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 className="cart-head">Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.images[0]} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <p className="cart-item-name"><strong>{item.name}</strong></p>
              <p className="cart-price">Price: ${item.price.toFixed(2)}</p>
              <p className="cart-quantity">Quantity: {item.quantity}</p>
              <p className="total-of-each">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h4>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</h4>
        <h4>Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h4>
        <button className="btn proceed-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
