import React from "react";
import cart from "../images/cart.jpg";
import "../style/cart.css";

function Cart() {
  return (
    <div id="cartDiv">
      <h1 id="cartTitle">FOUR GUYS</h1>
      <div id="cart">
        <img src={cart} alt="shopping cart" />
        <p>0 items</p>
      </div>
    </div>
  );
}

export default Cart;
