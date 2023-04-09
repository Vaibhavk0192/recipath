import React from "react";
import "./recipe.css";
import Ingredient from "../../components/Navbar/ingredient";

const Recipe = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [allergies, setAllergies] = React.useState([]);

  const clicked = (event) => {
    console.log(event);
  };
  return (
    <div>
      <div className="design_box1"></div>
      <div className="design_box2"></div>
      <div className="app__box">
        <div className="app__recipe-box">
          <h1 className="app__recipe-heading">Recipath</h1>
          <div className="app__recipe-ingredients">
            <ul style={{ display: "flex" }}>
              {ingredients.map((ingredient) => {
                return <Ingredient title={ingredient} click={clicked} />;
              })}
            </ul>
          </div>
          <div className="app__recipe-inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="Name" required></input>{" "}
            <label>Enter ingredients you have available</label>
          </div>
          <div className="app__recipe-ingredients">
            <ul style={{ display: "flex" }}>
              {allergies.map((allergy) => {
                return <Ingredient title={allergy} click={clicked} />;
              })}
            </ul>
          </div>
          <div className="app__recipe-inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="Name" required></input>{" "}
            <label>Enter your allergies</label>
          </div>
          <div className="btn-boundary">
            <a href="/" className="btn-Generate">
              Generate
            </a>
          </div>
        </div>
      </div>
      <div className="design_box3"></div>
      <div className="design_box4"></div>
    </div>
  );
};

export default Recipe;
