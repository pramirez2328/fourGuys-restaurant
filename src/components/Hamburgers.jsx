import React, { useState } from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";
import "../style/hamburger.css";
import sectionBurger from "../images/sectionBurger.jpg";
import BurgerIngredients from "./BurgerIngredients";

function Hamburgers() {
  const [value, setValue] = useState(0);
  return (
    <>
      <SideBar />
      <div className="section">
        <Cart />

        <fieldset>
          <legend>Hamburger</legend>
          <div className="sectionPicture">
            <img src={sectionBurger} alt="hamburger" />
          </div>
          <div className="burgerCounter">
            <button className="buttons">-</button>
            <span className="counter">0</span>
            <button className="buttons">+</button>
          </div>
        </fieldset>

        <BurgerIngredients value={value} />
      </div>
    </>
  );
}

export default Hamburgers;
