import nutritionAPI, { cancelRequest } from "_api/nutritionAPI";
import { useEffect, useReducer } from "react";

const FETCH_START = "FETCH_START";
const FETCH_ERROR = "FETCH_ERROR";
const FETCH_SUCCESS = "FETCH_SUCCESS";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, fetchStatus: "start" };
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
  healthLabels: [],
  fetchStatus: "idle",
  macros: {
    calories_kcal: {
      name: "Calories",
      amount: 0,
      unit: "cal",
      dailyValue: 0,
    },
    fat_g: {
      name: "Fats",
      amount: 0,
      unit: "g",
      dailyValue: 0,
    },
    carbs_g: {
      name: "Carbohydrates",
      amount: 0,
      unit: "g",
      dailyValue: 0,
    },
    protein_g: {
      name: "Protein",
      amount: 0,
      unit: "g",
      dailyValue: 0,
    },
  },
  nutrients: {
    calories_kcal: {
      name: "Calories",
      amount: 0,
      unit: "cal",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: true,
    },
    fat_g: {
      name: "Fats",
      amount: 0,
      unit: "g",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: true,
    },
    fatSat_g: {
      name: "Saturated Fat",
      amount: 0,
      unit: "g",
      dailyValue: 0,
      keyNutrient: false,
      macroNutrient: false,
    },
    fatTrans_g: {
      name: "Trans Fat",
      amount: 0,
      unit: "g",
      dailyValue: 0,
      keyNutrient: false,
      macroNutrient: false,
    },
    fatPoly_g: {
      name: "Polyunsaturated",
      amount: 0,
      unit: "g",
      dailyValue: 0,
      keyNutrient: false,
      macroNutrient: false,
    },
    fatMono_g: {
      name: "Monounsaturated",
      amount: 0,
      unit: "g",
      dailyValue: 0,
      keyNutrient: false,
      macroNutrient: false,
    },
    cholesterol_mg: {
      name: "Cholesterol",
      amount: 0,
      unit: "mg",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: false,
    },
    sodium_mg: {
      name: "Sodium",
      amount: 0,
      unit: "mg",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: false,
    },
    carbs_g: {
      name: "Carbohydrates",
      amount: 0,
      unit: "g",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: true,
    },
    fiber_g: {
      name: "Dietary Fiber",
      amount: 0,
      unit: "g",
      dailyValue: 0,
      keyNutrient: false,
      macroNutrient: false,
    },
    sugar_g: {
      name: "Sugars",
      amount: 0,
      unit: "g",
      dailyValue: 0,
      keyNutrient: false,
      macroNutrient: false,
    },
    protein_g: {
      name: "Protein",
      amount: 0,
      unit: "g",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: true,
    },
    vitaminC_mg: {
      name: "Vitamin C",
      amount: 0,
      unit: "mg",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: false,
    },
    vitaminB6_mg: {
      name: "Vitamin B6",
      amount: 0,
      unit: "mg",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: false,
    },
    vitaminB12_ug: {
      name: "Vitamin B12",
      amount: 0,
      unit: "μg",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: false,
    },
    thiamin_mg: {
      name: "Thiamin (B1)",
      amount: 0,
      unit: "mg",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: false,
    },
    riboflavin_mg: {
      name: "Riboflavin (B2)",
      amount: 0,
      unit: "mg",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: false,
    },
    niacin_mg: {
      name: "Naicin (B3)",
      amount: 0,
      unit: "mg",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: false,
    },
    potassium_mg: {
      name: "Potassium",
      amount: 0,
      unit: "mg",
      dailyValue: 0,
      keyNutrient: true,
      macroNutrient: false,
    },
    calcium_mg: {
      name: "Calcium",
      amount: 10,
      unit: "mg",
      dailyValue: 1,
      keyNutrient: true,
      macroNutrient: false,
    },
    iron_mg: {
      name: "Iron",
      amount: 0.5400000214576722,
      unit: "mg",
      dailyValue: 3.0000001192092904,
      keyNutrient: true,
      macroNutrient: false,
    },
  },
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
