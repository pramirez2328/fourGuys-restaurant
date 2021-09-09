import SideBar from "./SideBar";
import Cart from "./Cart";
import AddItems from "./AddItems";
import coke from "../images/coke.jpg";
import sprite from "../images/sprite.jpg";
import fanta from "../images/fanta.png";

function Drinks() {
  return (
    <>
      <SideBar />
      <div className="section">
        <Cart />

        <fieldset>
          <legend>Coca-Cola</legend>
          <div className="sectionPicture">
            <img src={coke} alt="soda can" />
          </div>
          <div className="burgerCounter">
            <button className="buttons">-</button>
            <span className="counter">0</span>
            <button className="buttons">+</button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Sprite</legend>
          <div className="sectionPicture">
            <img src={sprite} alt="soda can" />
          </div>
          <div className="burgerCounter">
            <button className="buttons">-</button>
            <span className="counter">0</span>
            <button className="buttons">+</button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Fanta</legend>
          <div className="sectionPicture">
            <img src={fanta} alt="soda can" />
          </div>
          <div className="burgerCounter">
            <button className="buttons">-</button>
            <span className="counter">0</span>
            <button className="buttons">+</button>
          </div>
        </fieldset>
        <AddItems />
      </div>
    </>
  );
}

export default Drinks;
