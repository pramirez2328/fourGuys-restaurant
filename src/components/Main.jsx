import React from "react";
import mainPhoto from "../images/hamburger.jpg";
import SideBar from "./SideBar";

import "../style/main.css";

function Main() {
  return (
    <>
      <SideBar />
      <div id="mainDiv">
        <h1 id="titleMain">Best Burgers Since 2007 </h1>

        <img id="mainImage" src={mainPhoto} alt="hamburger and fries" />
      </div>
    </>
  );
}

export default Main;
