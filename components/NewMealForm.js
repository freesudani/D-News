import React, { useRef } from "react";
import Card from "./ui/Card";
import classes from "../styles/NewMealForm.module.css";

const NewMealForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const ingredientsInputRef = useRef();
  const cookingInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;
    const enteredCooking = cookingInputRef.current.value;

    const cookingData = {
      title: enteredTitle,
      image: enteredImage,
      ingredients: enteredIngredients,
      cooking: enteredCooking,
    };
    props.onAddMeal(cookingData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Recipe Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            required
            rows="5"
            ref={ingredientsInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="cooking">Cooking Instructions</label>
          <textarea
            id="cooking"
            required
            rows="5"
            ref={cookingInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Recipe</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMealForm;
