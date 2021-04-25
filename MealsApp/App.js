import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";

const fecthFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

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
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
