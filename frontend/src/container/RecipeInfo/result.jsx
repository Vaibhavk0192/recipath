import React from "react";
import "./result.css";
import Resultingredient from "../../components/Navbar/ResultIngredient";
const result = (props) => {
  return (
    <div className="app__box">
      <div className="design_box1"></div>
      <div className="design_box2"></div>
      <div className="app__result-heading">{props.RecipeTitle}</div>
      <div className="app__result-ingredient_box">
        {props.Ingredients.map((ingredient, index) => {
          return <Resultingredient title={ingredient} key={index} />;
        })}
      </div>
      <div className="app__result-recipe">
        {props.Steps.map((step, index) => {
          return (
            <React.Fragment key={index}>
              {step}
              <br />
            </React.Fragment>
          );
        })}
      </div>
      <div className="design_box3"></div>
      <div className="design_box4"></div>
    </div>
  );
};

export default result;
