import React from "react";
import mainPhoto from "../images/hamburger.jpg";
import SideBar from "./SideBar";
import Cart from "./Cart";

import "../style/main.css";

function Main() {
  return (
    <>
      <SideBar />
      <div className="section">
        <Cart />
        <div id="mainDiv">
          <h1 id="titleMain">Best Burgers Since 2007 </h1>
          <img id="mainImage" src={mainPhoto} alt="hamburger and fries" />
        </div>
      </div>
    </>
  );
}

export default Main;
