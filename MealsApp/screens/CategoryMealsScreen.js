import React, { useEffect } from "react";
import { CATEGORIES } from "../data/dummyData";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

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
  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.empty}>
        <Text style={styles.text}>
          No meals currently available under this Category.
        </Text>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "roboto-regular",
    margin: 20,
    textAlign: "center",
  },
});

export default CategoryMealsScreen;
