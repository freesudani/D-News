import React from "react";
import SingleMeal from "./SingleMeal";
import classes from "../styles/MenuList.module.css";
import Masonry from "react-masonry-css";

const MenuList = (props) => {
  const breakpoints = { default: 3, 1100: 2, 700: 1 };
  return (
    <div className={classes.list}>
      <Masonry
        breakpointCols={breakpoints}
        className={classes.mymasonrygrid}
        columnClassName={classes.mymasonrygridcolumn}
      >
        {props.meals.map((meal) => (
          <SingleMeal
            key={meal.id}
            id={meal.id}
            image={meal.image}
            title={meal.title}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default MenuList;
