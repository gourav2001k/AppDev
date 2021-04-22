import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Btn from "../components/Btn";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import defaultStyles from "../constants/default-styles";
import BodyText from "../components/BodyText";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandom(min, max, exclude);
  }
  return rndNum;
};

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = (props) => {
  const { userChoice, onGameOver } = props;
  const initialGuess = generateRandom(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [dvcWidth, setDvcWidth] = useState(Dimensions.get("window").width);
  const [dvcHeight, setDvcHeight] = useState(Dimensions.get("window").height);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setDvcHeight(Dimensions.get("window").height);
      setDvcWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
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
      currentLow.current = currentGuess + 1;
    }
    const nextGuess = generateRandom(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setPastGuesses((curPastGuesses) => [
      nextGuess.toString(),
      ...curPastGuesses,
    ]);
  };

  if (dvcHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text style={defaultStyles.title}>Opponent's Guess</Text>

        <View style={styles.controls}>
          <Btn onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove-circle-outline" size={24} color="white" />
          </Btn>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Btn onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add-circle-outline" size={24} color="white" />
          </Btn>
        </View>
        <View style={styles.pastGuess}>
          <Text style={defaultStyles.title}>Past Guesses</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item) => item}
            data={pastGuesses}
            renderItem={renderListItem.bind(this, pastGuesses.length)}
            contentContainerStyle={styles.list}
          ></FlatList>
        </View>
      </View>
    );
  }
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
      <View style={styles.pastGuess}>
        <Text style={defaultStyles.title}>Past Guesses</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        ></FlatList>
      </View>
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
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
    width: 300,
    maxWidth: "80%",
  },
  listContainer: {
    width: Dimensions.get("window").width > 500 ? "70%" : "80%",
    flex: 1,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    alignItems: "center",
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  listItem: {
    justifyContent: "space-around",
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    width: "100%",
  },
  pastGuess: { padding: 10, marginVertical: 20 },
});

export default GameScreen;
