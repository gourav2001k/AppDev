import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game is Over</Text>
      <Text>Number of Rounds: {props.noOfRounds}</Text>
      <Text>Number was: {props.target}</Text>
      <Button title={"NEW GAME"} onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameOver;
