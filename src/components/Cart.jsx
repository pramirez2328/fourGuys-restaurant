import React from "react";
import cart from "../images/cart.jpg";
import "../style/cart.css";

function Cart() {
  return (
    <div id="cartDiv">
      <img id="cart" src={cart} alt="shopping cart" />
    </div>
  );
}

export default Cart;
