import React from "react";
import { View, StyleSheet, Button, Text, Image } from "react-native";

import BodyText from "../components/BodyText";
import Btn from "../components/Btn";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../assets/success.png")}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2020/09/24/03/50/achievement-5597527__340.png",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText style={styles.resultText}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.noOfRounds}</Text> to guess the
        number <Text style={styles.highlight}>{props.target}</Text>.
      </BodyText>
      <Btn onPress={props.onRestart}>NEW GAME</Btn>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  resultText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 20,
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOver;
