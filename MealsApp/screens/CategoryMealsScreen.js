import React, { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummyData";

import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({ title: catTitle });
  });
  const catID = props.route.params["categoryID"];
  const catTitle = CATEGORIES.find((cat) => cat.id === catID).title;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIDs.indexOf(catID) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
