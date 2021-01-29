import nutritionAPI from "_api/nutritionAPI";
import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...initialState,
        start: true,
      };
    case "SEARCH_ERROR":
      return {
        ...initialState,
        start: false,
        error: true,
      };
    case "SEARCH_SUCCESS":
      return {
        ...initialState,
        start: false,
        success: true,
        nutrition: action.nutrition,
      };
    case "RESET_SEARCH":
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  start: true,
  error: false,
  success: false,
  nutrition: {},
};

const useFetchNutritionData = (measure, foodId) => {
  const [{ nutrition, ...fetchStatus }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchNutrition = async ({ measureURI, qualifiers }, foodId) => {
    dispatch({ type: "SEARCH_START" });

    try {
      const {
        data: { nutrition },
      } = await nutritionAPI.post("/food/nutrition", {
        foodId,
        quantity: 1,
        measureURI,
        ...(qualifiers && { qualifiers }),
      });

      dispatch({ type: "SEARCH_SUCCESS", nutrition });
    } catch (error) {
      dispatch({ type: "SEARCH_ERROR" });
    }
  };

  useEffect(() => {
    fetchNutrition(measure, foodId);
  }, [measure, foodId]);

  return [nutrition, fetchStatus];
};

export default useFetchNutritionData;
