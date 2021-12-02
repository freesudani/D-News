import React from "react";
import classes from "../../styles/Card.moduel.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
