import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import DefaultText from "./DefualtText";

const MealItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={styles.mealHeader}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.mealDetail}>
            <DefaultText>{item.duration} MIN</DefaultText>
            <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#dfe4ed",
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
  },
  mealHeader: {
    flexDirection: "row",
    height: "80%",
  },
  mealDetail: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    height: "20%",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "roboto-medium",
    fontSize: 16,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export default MealItem;
