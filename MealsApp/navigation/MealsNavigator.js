import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummyData";

const Stack = createStackNavigator();

const extractTitle = ({ route }) => ({
  title: CATEGORIES.find((cat) => cat.id === route.params.categoryID).title,
});

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories",
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailScreen}
          options={{
            title: "Meal Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
