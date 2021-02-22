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
        macros: action.macros,
        fetchStatus: "success",
        nutrients: action.nutrients,
        healthLabels: action.healthLabels,
      };
    default:
      return state;
  }
};

const initialState = {
  macros: {
    fat_g: 0,
    carbs_g: 0,
    protein_g: 0,
    calories_kcal: 0,
  },
  nutrients: {},
  healthLabels: [],
  fetchStatus: "idle",
};

const useFetchNutritionData = (measure, foodId) => {
  const [{ nutrients, macros, fetchStatus }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchNutrition = async ({ measureURI, qualifiers }, foodId) => {
    dispatch({ type: FETCH_START });

    try {
      const {
        data: { nutrition },
      } = await nutritionAPI.post("/food/nutrition", {
        foodId,
        measureURI,
        ...(qualifiers && { qualifiers }),
      });

      dispatch({
        type: FETCH_SUCCESS,
        macros: nutrition.macros,
        nutrients: nutrition.nutrients,
        healthLabels: nutrition.healthLabels,
      });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
    }
  };

  useEffect(() => {
    fetchNutrition(measure, foodId);
    return () => cancelRequest();
  }, [measure, foodId]);

  return [nutrients, macros, fetchStatus];
};

export default useFetchNutritionData;
