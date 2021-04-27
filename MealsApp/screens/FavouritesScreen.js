import React, { useEffect } from "react";
import { MEALS } from "../data/dummyData";

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
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavouritesScreen;
