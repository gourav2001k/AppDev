import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
const GoalItem = ({ obj, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, obj.item.id)}>
      <View style={styles.listItem}>
        <Text>{obj.item.val}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
    alignItems: "center",
  },
});

export default GoalItem;
