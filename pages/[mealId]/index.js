import React from "react";
import Head from "next/head";
import MealDetail from "../../components/MealDetail";

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

export default MealDetails;
