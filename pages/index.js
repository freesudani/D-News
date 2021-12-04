import React from "react";
import MenuList from "../components/MenuList";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  return <MenuList meals={props.meals} />;
}
