import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummyData";

const MealDetailScreen = (props) => {
  const mealID = props.route.params["mealID"];
  const meal = MEALS.find((meal) => meal.id === mealID);
  useEffect(() => {
    props.navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Fav"
            iconName="ios-star"
            onPress={() => {
              console.log("Pressed");
            }}
          />
        </HeaderButtons>
      ),
    });
  });
  return (
    <View style={styles.screen}>
      <Text> Meal Details Screen</Text>
      <Button
        title="GO HOME"
        onPress={() => props.navigation.popToTop()}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
