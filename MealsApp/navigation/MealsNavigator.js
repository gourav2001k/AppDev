import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FavNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FilterNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="FILTERS" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: Colors.primary }}
      shifting={true}
      tabBarOptions={{
        activeTintColor: Colors.accent,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.primary,
          labelStyle: { textAlign: "center", fontSize: 16 },
        }}
      >
        <Drawer.Screen name="MENU" component={TabNavigator} />
        <Drawer.Screen name="FILTERS" component={FilterNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
