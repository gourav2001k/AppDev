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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    alignItems: "center",
  },
});

export default GoalItem;
