import React from "react";
import "./result.css";
import Resultingredient from "../../components/Navbar/ResultIngredient";
const result = () => {
  return (
    <div className="app__box">
      <div className="design_box1"></div>
      <div className="design_box2"></div>
      <div className="app__result-heading">milk Slaw with Pearl Onions</div>
      <div className="app__result-ingredient_box">
        <Resultingredient title=" 1/2 teaspoon salt" />
        <Resultingredient title="1/2 cup diced green bell pepper" />
        <Resultingredient title="1 cup plain yogurt" />
        <Resultingredient title="1/4 cup chopped fresh cilantro" />
        <Resultingredient title="1/2 cup diced green bell pepper" />
        <Resultingredient title="1 cup diced sweet onion" />
        <Resultingredient title="1 cup shredded cabbage" />
        <Resultingredient title="1 cup diced green bell pepper " />
        <Resultingredient title="1 tablespoon chopped fresh cilantro" />
        <Resultingredient title="1 teaspoon ground cumin" />
        <Resultingredient title="1/2 teaspoon ground black pepper" />
        <Resultingredient title="milk" />
        <Resultingredient title=" 1 cup diced sweet potatoes " />
      </div>
      <div className="app__result-recipe">
        ▪ Place cauliflower in a bowl and cover with several inches of cool
        water; let soak until tender, about 1 hour. Drain and rinse beans.,
        <br />▪ Combine cauliflower, corn, onion, and garlic in a large bowl.
        Stir in coconut milk, cilantro, and garlic. Seas son with salt and
        pepper., <br />▪ Cover bowl with plastic wrap and refrigerate until
        flavors combine, about 30 minutes., <br />▪ Preheat oven to 3 350
        degrees F (175 degrees C). Grease a 9x13-inch baking dish.,
        <br /> ▪ Place cauliflower in the baking dish. Sprinkle salt and pepper
        on top.,, ▪ Bake in the preheated oven until tender, about 45 minutes.
        Cool for 10 minutes before serving.
      </div>
      <div className="design_box3"></div>
      <div className="design_box4"></div>
    </div>
  );
};

export default result;
