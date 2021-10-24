import React, { useState } from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";
import AddItems from "./AddItems";
import coke from "../images/coke.jpg";
import sprite from "../images/sprite.jpg";
import fanta from "../images/fanta.png";

function Drinks() {
  const [cokeItems, setCokeItems] = useState(0);
  const [spriteItems, setSpriteItems] = useState(0);
  const [fantaItems, setFantaItems] = useState(0);

  const handleDrinksQuantity = (type, sign) => {
    switch (type) {
      case "coke":
        sign === "+"
          ? setCokeItems((prev) => prev + 1)
          : cokeItems && setCokeItems((prev) => prev - 1);
        break;
      case "sprite":
        sign === "+"
          ? setSpriteItems((prev) => prev + 1)
          : spriteItems && setSpriteItems((prev) => prev - 1);
        break;

      case "fanta":
        sign === "+"
          ? setFantaItems((prev) => prev + 1)
          : fantaItems && setFantaItems((prev) => prev - 1);
        break;
      default:
    }
  };
  return (
    <>
      <SideBar />
      <div className="section">
        <Cart />

        <fieldset>
          <legend>Coca-Cola</legend>
          <div className="dessert_and_drinks">
            <img src={coke} alt="soda can" />
          </div>
          <div className="burgerCounter">
            <button
              className="buttons"
              onClick={() => handleDrinksQuantity("coke", "-")}
            >
              -
            </button>
            <span className="counter">{cokeItems}</span>
            <button
              className="buttons"
              onClick={() => handleDrinksQuantity("coke", "+")}
            >
              +
            </button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Sprite</legend>
          <div className="dessert_and_drinks">
            <img src={sprite} alt="soda can" />
          </div>
          <div className="burgerCounter">
            <button
              className="buttons"
              onClick={() => handleDrinksQuantity("sprite", "-")}
            >
              -
            </button>
            <span className="counter">{spriteItems}</span>
            <button
              className="buttons"
              onClick={() => handleDrinksQuantity("sprite", "+")}
            >
              +
            </button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Fanta</legend>
          <div className="dessert_and_drinks">
            <img src={fanta} alt="soda can" />
          </div>
          <div className="burgerCounter">
            <button
              className="buttons"
              onClick={() => handleDrinksQuantity("fanta", "-")}
            >
              -
            </button>
            <span className="counter">{fantaItems}</span>
            <button
              className="buttons"
              onClick={() => handleDrinksQuantity("fanta", "+")}
            >
              +
            </button>
          </div>
        </fieldset>
        <AddItems />
      </div>
    </>
  );
}

export default Drinks;
