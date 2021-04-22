import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from "react-native";

import BodyText from "../components/BodyText";
import Btn from "../components/Btn";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOver = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width * 0.35,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  resultText: {
    marginBottom: Dimensions.get("window").height / 20,
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
    marginHorizontal: Dimensions.get("window").width / 10,
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOver;
