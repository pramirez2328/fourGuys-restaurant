import React, { useState } from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";
import "../style/food.css";
import "../style/sideBar.css";

import sectionBurger from "../images/sectionBurger.jpg";
import BurgerIngredients from "./BurgerIngredients";
import AddItems from "./AddItems";

function Hamburgers() {
  const [hamburgerValue, sethamburgerValue] = useState(0);
  const handleNumberOfBurgers = (sign) => {
    let addOrDecrease = sign === "+" ? 1 : -1;
    if (hamburgerValue === 0 && addOrDecrease === -1) {
      sethamburgerValue(0);
    } else {
      sethamburgerValue((prev) => prev + addOrDecrease);
    }
  };

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
            <button
              className="buttons"
              onClick={() => handleNumberOfBurgers("-")}
            >
              -
            </button>
            <span className="counter">{hamburgerValue}</span>
            <button
              className="buttons"
              onClick={() => handleNumberOfBurgers("+")}
            >
              +
            </button>
          </div>
        </fieldset>

        <BurgerIngredients />
        <AddItems />
      </div>
    </>
  );
}

export default Hamburgers;
