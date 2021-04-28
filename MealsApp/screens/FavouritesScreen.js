import React, { useEffect } from "react";
import { useSelector } from "react-redux";

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
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavouritesScreen;
