import React from "react";
import classes from "../styles/MealDetail.module.css";

const MealDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.ingredients}</p>
      <p>{props.cooking}</p>
    </section>
  );
};

export default MealDetail;
