import React from "react";
import SingleMeal from "./SingleMeal";
import classes from "../styles/MenuList.module.css";

const MenuList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meals.map((meal) => {
        <SingleMeal
          key={meal.id}
          id={meal.id}
          image={meal.image}
          title={meal.title}
        />;
      })}
    </ul>
  );
};

export default MenuList;
