import React from "react";
import "../style/sideBar.css";
import logo from "../images/logo.jpeg";

function SideBar() {
  return (
    <nav id="sideBar">
      <div>
        <img id="logo" src={logo} alt="hamburger logo" />
        <h1 className="title">Four Guys</h1>
      </div>

      <ul id="sideNavUl">
        <li className="links">
          <a href="/hamburgers"> Hamburgers</a>
        </li>
        <li className="links">
          <a href="/hotdogs">Hot dogs</a>
        </li>
        <li className="links">
          <a href="/dessert">Dessert</a>
        </li>
        <li className="links">
          <a href="drinks">Drinks</a>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
