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

const useFetchNutritionData = (foodId, measureURI, qualifier) => {
  const [{ nutrition, ...fetchStatus }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchNutrition = async (requestBody) => {
    dispatch({ type: "SEARCH_START" });

    try {
      const {
        data: { nutrition },
      } = await nutritionAPI.post("/food/nutrition", requestBody);

      dispatch({ type: "SEARCH_SUCCESS", nutrition });
    } catch (error) {
      dispatch({ type: "SEARCH_ERROR" });
    }
  };

  useEffect(() => {
    const requestBody = {
      quantity: 1,
      foodId,
      measureURI,
    };

    if (qualifier) requestBody.qualifiers = [qualifier];

    fetchNutrition(requestBody);
  }, [foodId, measureURI, qualifier]);

  return [nutrition, fetchStatus];
};

export default useFetchNutritionData;
