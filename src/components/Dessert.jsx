import React, { useState } from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";
import "../style/food.css";
import AddItems from "./AddItems";
import chocolateCake from "../images/chocolateCake.jpg";
import cheeseCake from "../images/cheeseCake.jpg";
import flan from "../images/flan.png";

function Dessert() {
  const [cheeseItems, setCheeseItems] = useState(0);
  const [chocoItems, setChocoItems] = useState(0);
  const [flanItems, setFlanItems] = useState(0);

  const handleDessertQuantity = (type, sign) => {
    switch (type) {
      case "choco":
        sign === "+"
          ? setChocoItems((prev) => prev + 1)
          : chocoItems && setChocoItems((prev) => prev - 1);
        break;
      case "flan":
        sign === "+"
          ? setFlanItems((prev) => prev + 1)
          : flanItems && setFlanItems((prev) => prev - 1);
        break;

      case "cheese":
        sign === "+"
          ? setCheeseItems((prev) => prev + 1)
          : cheeseItems && setCheeseItems((prev) => prev - 1);
        break;
      default:
        console.log("wrong choice");
    }
  };

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
            <button
              className="buttons"
              onClick={() => handleDessertQuantity("choco", "-")}
            >
              -
            </button>
            <span className="counter">{chocoItems}</span>
            <button
              className="buttons"
              onClick={() => handleDessertQuantity("choco", "+")}
            >
              +
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Cheese Cake</legend>
          <div className="dessert_and_drinks">
            <img src={cheeseCake} alt="hamburger" />
          </div>
          <div className="burgerCounter">
            <button
              className="buttons"
              onClick={() => handleDessertQuantity("cheese", "-")}
            >
              -
            </button>
            <span className="counter">{cheeseItems}</span>
            <button
              className="buttons"
              onClick={() => handleDessertQuantity("cheese", "+")}
            >
              +
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Flan</legend>
          <div className="dessert_and_drinks">
            <img src={flan} alt="flan" />
          </div>
          <div className="burgerCounter">
            <button
              className="buttons"
              onClick={() => handleDessertQuantity("flan", "-")}
            >
              -
            </button>
            <span className="counter">{flanItems}</span>
            <button
              className="buttons"
              onClick={() => handleDessertQuantity("flan", "+")}
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

export default Dessert;
