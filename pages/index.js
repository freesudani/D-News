import React from "react";
import MenuList from "../components/MenuList";
import Head from "next/head";
import { MongoClient } from "mongodb";

import classes from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Sudanese Cuisine</title>
        <meta
          name="description"
          content="Discover most of the sudanese delicious foods"
        />
      </Head>
      <div className={classes.main}>
        <MenuList meals={props.meals} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://freesudani:12Monkeys123@cluster0.yg0f1.mongodb.net/SudaneseCuisuinDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const mealsCollection = db.collection("meals");

  const meals = await mealsCollection.find().toArray();

  client.close();

  return {
    props: {
      meals: meals.map((meal) => ({
        title: meal.title,
        image: meal.image,
        ingredients: meal.ingredients,
        cooking: meal.cooking,
        id: meal._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
