import React from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";
import "../style/food.css";
import AddItems from "./AddItems";
import chocolateCake from "../images/chocolateCake.jpg";
import cheeseCake from "../images/cheeseCake.jpg";
import flan from "../images/flan.png";

function Dessert() {
  return (
    <>
      <SideBar />
      <div className="section">
        <Cart />

        <fieldset>
          <legend>Chocolate cake</legend>
          <div className="dessert_and_drinks">
            <img src={chocolateCake} alt="hamburger" />
          </div>
          <div className="burgerCounter">
            <button className="buttons">-</button>
            <span className="counter">0</span>
            <button className="buttons">+</button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Cheese Cake</legend>
          <div className="dessert_and_drinks">
            <img src={cheeseCake} alt="hamburger" />
          </div>
          <div className="burgerCounter">
            <button className="buttons">-</button>
            <span className="counter">0</span>
            <button className="buttons">+</button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Flan</legend>
          <div className="dessert_and_drinks">
            <img src={flan} alt="flan" />
          </div>
          <div className="burgerCounter">
            <button className="buttons">-</button>
            <span className="counter">0</span>
            <button className="buttons">+</button>
          </div>
        </fieldset>
        <AddItems />
      </div>
    </>
  );
}

export default Dessert;
