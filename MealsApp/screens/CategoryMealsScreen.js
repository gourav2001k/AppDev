import React, { useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({ title: catTitle });
  });
  const catID = props.route.params["categoryID"];
  const catTitle = CATEGORIES.find((cat) => cat.id === catID).title;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIDs.indexOf(catID) >= 0
  );

  const renderMealItem = (itemData) => {
    return <MealItem item={itemData.item} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default CategoryMealsScreen;
