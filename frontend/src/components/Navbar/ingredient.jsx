import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./ingredient.css";

const Ingredient = (props) => {
  return props.underline ? (
    <div className="app__ingredient-button_cross">
      {props.title}
      <div
        className="cross-button"
        onClick={() => {
          props.click(props.id);
        }}
      >
        <RxCross2 size={20} />
      </div>
    </div>
  ) : (
    <div className="app__ingredient-button">
      {props.title}{" "}
      <div className="cross-button">
        <RxCross2 size={20} />
      </div>
    </div>
  );
};

export default Ingredient;
