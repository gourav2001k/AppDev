import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.text}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    width: "100%",
    height: 90,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontFamily: "roboto-regular",
  },
});

export default Header;
