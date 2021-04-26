import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categorical Meals Screen</Text>
      <Button
        title="NEXT"
        onPress={() => props.navigation.push("MealDetails")}
      ></Button>
      <Button title="Go BACK" onPress={() => props.navigation.pop()}></Button>
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

export default CategoryMealsScreen;
