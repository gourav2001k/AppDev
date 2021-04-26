import React from "react";
import { MEALS } from "../data/dummyData";

import MealList from "../components/MealList";

const FavouritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavouritesScreen;
