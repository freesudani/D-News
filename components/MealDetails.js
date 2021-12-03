import React from "react";
import classes from "../styles/MealDetails.module.css";

const MealDetails = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.ingredients}</p>
      <p>{props.cooking}</p>
    </section>
  );
};

export default MealDetails;
