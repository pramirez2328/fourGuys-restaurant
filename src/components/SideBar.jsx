import React from "react";
import "../style/sideBar.css";
import logo from "../images/logo.jpeg";
import burger from "../images/burger.jpg";
import dog from "../images/dog.jpg";
import cake from "../images/cake.jpg";
import drink from "../images/drink.jpg";

import { Link } from "react-router-dom";

function SideBar() {
  return (
    <nav id="sideBar">
      <div>
        <Link to="/">
          <img id="logo" src={logo} alt="hamburger logo" />
        </Link>

        <h4 className="title">
          <Link to="/">World Famous Burgers </Link>
        </h4>
      </div>

      <ul id="sideNavUl">
        <li className="links">
          <Link to="/hamburgers">
            <img className="icons" src={burger} alt="hamburger" />
            <span className="iconNames">Hamburgers</span>
          </Link>
        </li>
        <li className="links">
          <Link to="/hotdogs">
            <img className="icons" src={dog} alt="hot dog" />
            <span className="iconNames">Hot Dogs</span>
          </Link>
        </li>
        <li className="links">
          <Link to="/dessert">
            <img className="icons" src={cake} alt="cake" />
            <span className="iconNames">Desserts</span>
          </Link>
        </li>
        <li className="links">
          <Link to="/drinks">
            <img className="icons" src={drink} alt="drink" />
            <span className="iconNames">Drinks</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
