import React from "react";

function DogIngredients({ value }) {
  return (
    <div>
      <div id="burgerIngredients">
        <div>
          <h3> Jalapeño</h3>
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

        <div>
          <h3>Onions</h3>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

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

        <div>
          <h3>Mustard</h3>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <div>
          <h3>Relish</h3>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default DogIngredients;
