import React from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";
import "../style/hamburger.css";
import sectionBurger from "../images/sectionBurger.jpg";

function Hamburgers() {
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
      </div>
    </>
  );
}

export default Hamburgers;
