import { MEALS } from "../../data/dummyData";
import { TOGGLE_FAVOURITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existIdx = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealID
      );
      if (existIdx >= 0) {
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.splice(existIdx, 1),
        };
      } else {
        const newMeal = state.meals.find((meal) => meal.id === action.mealID);
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.concat(newMeal),
        };
      }
    default:
      return state;
  }
};

export default mealsReducer;
