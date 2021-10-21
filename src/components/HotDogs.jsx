import React, { useState } from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";
import "../style/food.css";
import DogIngredients from "./DogIngredients";
import hotDog from "../images/hotdog.jpg";
import AddItems from "./AddItems";

function HotDogs() {
  const [dogs, setDogs] = useState(0);

  const handleAddDogs = (sign) => {
    if (sign === "+") {
      setDogs((prev) => prev + 1);
    } else if (dogs !== 0) {
      setDogs((prev) => prev - 1);
    }
  };
  return (
    <>
      <SideBar />
      <div className="section">
        <Cart />

        <fieldset>
          <legend>Hot Dog</legend>
          <div className="sectionPicture">
            <img src={hotDog} alt="hamburger" />
          </div>
          <div className="burgerCounter">
            <button className="buttons" onClick={() => handleAddDogs("-")}>
              -
            </button>
            <span className="counter">{dogs}</span>
            <button className="buttons" onClick={() => handleAddDogs("+")}>
              +
            </button>
          </div>
        </fieldset>

        <DogIngredients value={dogs} />
        <AddItems />
      </div>
    </>
  );
}

export default HotDogs;
