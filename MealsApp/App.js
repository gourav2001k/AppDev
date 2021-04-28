import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";

const fecthFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

const rootReducer = combineReducers({ meals: mealsReducer });

const store = createStore(rootReducer);

export default function App() {
  const [fontLoaded, setFontloaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fecthFonts}
        onFinish={() => {
          setFontloaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
