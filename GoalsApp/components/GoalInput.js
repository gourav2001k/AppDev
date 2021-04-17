import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ onAddGoal, visible, manageMode }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={manageMode}></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={onAddGoal.bind(this, enteredGoal, setEnteredGoal)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: "#f2f2f2",
  },
  input: {
    width: "80%",
    padding: 5,
    paddingLeft: 10,
    marginVertical: 10,
    borderColor: "grey",
    borderWidth: 0.2,
    borderRadius: 8,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
