import React from "react";
import { useRouter } from "next/router";
import NewMealForm from "../../components/NewMealForm";
import Head from "next/head";

const NewMeal = () => {
  const router = useRouter();

  const addMealHandler = async (insertedMealData) => {
    const response = await fetch("/api/new-meal", {
      method: "POST",
      body: JSON.stringify(insertedMealData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a New Meal</title>
        <meta
          name="description"
          content="Add a sudanese meal to be included in our Sudanese-Cuisine."
        />
      </Head>
      <NewMealForm onAddMeal={addMealHandler} />
    </>
  );
};

export default NewMeal;
