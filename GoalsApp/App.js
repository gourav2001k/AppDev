import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = (enteredGoal, setEnteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), val: enteredGoal },
    ]);
    setEnteredGoal("");
    setAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelAddMode = () => {
    setAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button
          title="Add New Goal"
          onPress={() => setAddMode((currentMode) => !currentMode)}
        />
      </View>

      <GoalInput
        visible={addMode}
        onAddGoal={addGoalHandler}
        manageMode={cancelAddMode}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem onDelete={removeGoalHandler} obj={itemData} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 30, backgroundColor: "#f2f2f2" },
  button: {
    marginVertical: 20,
  },
});
