import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = ({ title, onSelect, color }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    textAlign: "right",
  },
});

export default CategoryGridTile;
