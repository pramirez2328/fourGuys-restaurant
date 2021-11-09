import React from "react";
import "../style/food.css";

function BurgerIngredients() {
  return (
    <div id="ingredients">
      <h2 className="subtitle">Customize your burger!</h2>
      <div className="foodIngredients">
        <div className="food_divs">
          <div>
            <h3> Jalapeño</h3>
            <label className="switch">
              <input type="checkbox" id="inputJalapeno" />

              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <h3>Cheese</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="food_divs">
          <div>
            <h3>Lettuce</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div>
            <h3>Tomato</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="food_divs">
          <div>
            <h3>Onions</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div>
            <div>
              <h3>Mushroom</h3>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="food_divs">
          <div>
            <h3>Mayo</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <h3>Ketchup</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="food_divs">
          <div>
            <h3>Relish</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div>
            <h3>Mustard</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
