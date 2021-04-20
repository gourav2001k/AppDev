import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Btn from "../components/Btn";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import defaultStyles from "../constants/default-styles";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandom(min, max, exclude);
  }
  return rndNum;
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandom(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && userChoice > currentGuess) ||
      (direction === "greater" && userChoice < currentGuess)
    ) {
      Alert.alert("Don't Lie!", "You know that this is wrong......", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuess = generateRandom(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setRounds(rounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Btn onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove-circle-outline" size={24} color="white" />
        </Btn>
        <Btn onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add-circle-outline" size={24} color="white" />
        </Btn>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
