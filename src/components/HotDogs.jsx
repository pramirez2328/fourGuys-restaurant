import React, { useState } from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";
import "../style/food.css";
import DogIngredients from "./DogIngredients";
import hotDog from "../images/hotdog.jpg";
import AddItems from "./AddItems";

function HotDogs() {
  const [dogs, setDogs] = useState(0);
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
            <button className="buttons">-</button>
            <span className="counter">0</span>
            <button className="buttons">+</button>
          </div>
        </fieldset>

        <DogIngredients value={dogs} />
        <AddItems />
      </div>
    </>
  );
}

export default HotDogs;
