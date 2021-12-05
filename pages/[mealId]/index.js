import React from "react";
import Head from "next/head";
import MealDetail from "../../components/MealDetail";
import { MongoClient, ObjectId } from "mongodb";

const MealDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.cookingData.title}</title>
        <meta name="description" content="Sudanese-Cuisine" />
      </Head>
      <MealDetail
        title={props.cookingData.title}
        image={props.cookingData.image}
        ingredients={props.cookingData.ingredients}
        cooking={props.cookingData.cooking}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://freesudani:12Monkeys123@cluster0.yg0f1.mongodb.net/SudaneseCuisuinDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const mealsCollection = db.collection("meals");

  const meals = await mealsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meals.map((meal) => ({
      params: { mealId: meal._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const mealId = context.params.mealId;

  const client = await MongoClient.connect(
    "mongodb+srv://freesudani:12Monkeys123@cluster0.yg0f1.mongodb.net/SudaneseCuisuinDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const mealsCollection = db.collection("meals");

  const selectedMeal = await mealsCollection.findOne({
    _id: ObjectId(mealId),
  });

  client.close();

  return {
    props: {
      cookingData: {
        id: selectedMeal._id.toString(),
        title: selectedMeal.title,
        image: selectedMeal.image,
        ingredients: selectedMeal.ingredients,
        cooking: selectedMeal.cooking,
      },
    },
  };
}

export default MealDetails;
