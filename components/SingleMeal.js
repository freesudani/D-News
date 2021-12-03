import React from "react";
import { useRouter } from "next/router";
import Card from "./ui/Card";
import classes from "../styles/SingleMeal.module.css";

const SingleMeal = (props) => {
  const router = useRouter();
  function showMealDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.food}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h2>{props.title}</h2>
        </div>
        <div className={classes.actions}>
          <button onClick={showMealDetailsHandler}>Details</button>
        </div>
      </Card>
    </li>
  );
};

export default SingleMeal;
