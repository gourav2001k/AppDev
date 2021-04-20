import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-sans",
  },
});

export default Header;
