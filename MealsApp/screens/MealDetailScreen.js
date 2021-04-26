import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MealDetailScreen = (props) => {
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
