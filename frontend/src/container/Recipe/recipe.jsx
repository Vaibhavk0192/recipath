import React from "react";
import "./recipe.css";
import Ingredient from "../../components/Navbar/ingredient";

const Recipe = () => {
  const [ingredientItem, setIngredientItem] = React.useState("");
  const [allergyItem, setAllergyItem] = React.useState("");
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
          <div className="app__recipe-input">
            <div className="app__recipe-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="Name"
                required
                value={ingredientItem}
                onChange={(event) => setIngredientItem(event.target.value)}
              ></input>{" "}
              <label for="">Enter ingredients</label>
              <div className="app__recipe-adddiv">
                <button
                  className="app__recipe-add"
                  onClick={() => {
                    setIngredients([...ingredients, ingredientItem]);
                    setIngredientItem("");
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
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
            <input
              type="Name"
              required
              value={allergyItem}
              onChange={(event) => {
                setAllergyItem(event.target.value);
              }}
            ></input>{" "}
            <label for="">Enter ingredients you don't want</label>
            <div className="app__recipe-adddiv">
              <button
                className="app__recipe-add"
                onClick={() => {
                  setAllergies([...allergies, allergyItem]);
                  setAllergyItem("");
                }}
              >
                ADD
              </button>
            </div>
          </div>
          <div className="btn-boundary">
            <a href="/" className="btn-Generate">
              Generate
            </a>
          </div>
          <div className="app__recipe-note">
            *Don't enter any condiments or spices. we assume you have all spices
            available at hand!
          </div>
        </div>
      </div>
      <div className="design_box3"></div>
      <div className="design_box4"></div>
    </div>
  );
};

export default Recipe;
