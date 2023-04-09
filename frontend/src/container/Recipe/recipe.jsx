import React from "react";
import "./recipe.css";
import Ingredient from "../../components/Navbar/ingredient";
import { RiAddCircleFill } from "react-icons/ri";

const Recipe = () => {
  return (
    <div>
      <div class="design_box1"></div>
      <div class="design_box2"></div>
      <div className="app__box">
        <div className="app__recipe-box">
          <h1 className="app__recipe-heading">Recipath</h1>
          <div className="app__recipe-ingredients">
            <ul style={{ display: "flex" }}>
              <Ingredient title="wheat" />
              <Ingredient title="flour" />
              <Ingredient title="milk" />
              <Ingredient title="rice" />
            </ul>
          </div>
          <div className="app__recipe-input">
            <div className="app__recipe-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="Name" required></input>{" "}
              <label for="">enter ingredients</label>
            <div className="app__recipe-adddiv">
              <button className="app__recipe-add">
                ADD
              </button>
            </div>
            </div>
          </div>

          <div className="app__recipe-ingredients">
            <ul style={{ display: "flex" }}>
              <Ingredient title="ketchup" underline={true} />
              <Ingredient title="chezze" underline={true} />
            </ul>
          </div>
          <div className="app__recipe-inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="Name" required></input>{" "}
            <label for="">enter ingredients you don't want</label>
            <div className="app__recipe-adddiv">
              <button className="app__recipe-add">
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
            *Don't enter any condiments spices. we assume you have all spices available at hand!
          </div>
        </div>
      </div>
      <div class="design_box3"></div>
      <div class="design_box4"></div>
    </div>
  );
};

export default Recipe;
