import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavouritesScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Drawer"
            iconName="ios-menu"
            onPress={props.navigation.toggleDrawer}
          />
        </HeaderButtons>
      ),
      title: "Your Favourites",
    });
  });
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.empty}>
        <Text style={styles.text}>
          No favourite meals found. Start adding some!
        </Text>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
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

export default FavouritesScreen;
