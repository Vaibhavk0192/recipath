import React from "react";
import "./recipe.css";
import Ingredient from "../../components/Navbar/ingredient";

const Recipe = () => {
  const [ingredientItem, setIngredientItem] = React.useState("");
  const [allergyItem, setAllergyItem] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [allergies, setAllergies] = React.useState([]);

  const removeIngredient = (id) => {
    setIngredients((prevIngredients) => {
      return prevIngredients.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const removeAllergy = (id) => {
    setAllergies((prevAllergies) => {
      return prevAllergies.filter((item, index) => {
        return index !== id;
      });
    });
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
              {ingredients.map((ingredient, index) => {
                return (
                  <Ingredient
                    title={ingredient}
                    click={removeIngredient}
                    key={index}
                    id={index}
                  />
                );
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
              <label>Enter ingredients you have available</label>
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
              {allergies.map((allergy, index) => {
                return (
                  <Ingredient
                    title={allergy}
                    click={removeAllergy}
                    key={index}
                    id={index}
                  />
                );
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
            <label>Enter Allergies your body responds to</label>
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
