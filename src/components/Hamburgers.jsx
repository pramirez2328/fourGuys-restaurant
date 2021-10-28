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
    if (sign === "+") {
      sethamburgerValue((prev) => prev + 1);
    } else if (hamburgerValue !== 0) {
      sethamburgerValue((prev) => prev - 1);
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
// this is cool
