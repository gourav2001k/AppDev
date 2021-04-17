import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const GoalItem = ({ obj, onDelete }) => {
  return (
    <View style={styles.listItem}>
      <Text>{obj.item.val}</Text>
      <TouchableOpacity onPress={onDelete.bind(this, obj.item.id)}>
        <AntDesign name="closecircleo" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
    alignItems: "center",
  },
});

export default GoalItem;
