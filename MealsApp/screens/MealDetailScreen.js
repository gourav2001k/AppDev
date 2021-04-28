import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import DefaultText from "../components/DefualtText";
import HeaderButton from "../components/HeaderButton";
import { toggleFavourite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const MEALS = useSelector((state) => state.meals.meals);
  const mealID = props.route.params["mealID"];
  const isFav = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => (meal.id = mealID))
  );
  const meal = MEALS.find((meal) => meal.id === mealID);
  useEffect(() => {
    props.navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Fav"
            iconName={isFav ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavouriteHandler}
          />
        </HeaderButtons>
      ),
    });
  });

  const dispatch = useDispatch();
  const toggleFavouriteHandler = () => {
    dispatch(toggleFavourite(mealID));
  };
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <View style={styles.detail}>
          <DefaultText>{meal.duration} MINS</DefaultText>
          <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {meal.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {meal.steps.map((step) => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: { flex: 1, marginBottom: 20 },
  detail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: { fontFamily: "roboto-medium", fontSize: 22, textAlign: "center" },
  image: { width: "100%", height: 200 },
  listItem: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default MealDetailScreen;
