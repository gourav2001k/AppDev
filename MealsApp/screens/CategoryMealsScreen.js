import React, { useEffect } from "react";
import { CATEGORIES } from "../data/dummyData";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({ title: catTitle });
  });
  const catID = props.route.params["categoryID"];

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const catTitle = CATEGORIES.find((cat) => cat.id === catID).title;
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIDs.indexOf(catID) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
