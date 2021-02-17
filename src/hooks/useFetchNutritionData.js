import nutritionAPI, { cancelRequest } from "_api/nutritionAPI";
import { useEffect, useReducer } from "react";

const FETCH_START = "FETCH_START";
const FETCH_ERROR = "FETCH_ERROR";
const FETCH_SUCCESS = "FETCH_SUCCESS";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...initialState, fetchStatus: "started" };
    case FETCH_ERROR:
      return { ...initialState, fetchStatus: "error" };
    case FETCH_SUCCESS:
      return {
        ...initialState,
        fetchStatus: "success",
        nutrition: action.nutrition,
      };
    default:
      return state;
  }
};

const initialState = {
  nutrition: {},
  fetchStatus: "idle",
};

const useFetchNutritionData = (measure, foodId) => {
  const [{ nutrition, fetchStatus }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchNutrition = async ({ measureURI, qualifiers }, foodId) => {
    dispatch({ type: FETCH_START });

    const foodData = {
      foodId,
      measureURI,
      quantity: 1,
      ...(qualifiers && { qualifiers }),
    };

    try {
      const {
        data: { nutrition },
      } = await nutritionAPI.post("/food/nutrition", foodData);

      dispatch({ type: FETCH_SUCCESS, nutrition });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
    }
  };

  useEffect(() => {
    fetchNutrition(measure, foodId);
    return () => cancelRequest();
  }, [measure, foodId]);

  return [nutrition, fetchStatus];
};

export default useFetchNutritionData;
