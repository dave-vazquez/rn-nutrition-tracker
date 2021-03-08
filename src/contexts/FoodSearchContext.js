import createContext from "./createContext";
import nutritionAPI from "_api/nutritionAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SEARCH_START = "SEARCH_START";
const SEARCH_ERROR = "SEARCH_ERROR";
const SEARCH_EMPTY = "SEARCH_EMPTY";
const SEARCH_SUCCESS = "SEARCH_SUCCESS";
const RESET_SEARCH = "RESET_SEARCH";

const foodSearchReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...initialState,
        searchStatus: "started",
      };
    case SEARCH_ERROR:
      return {
        ...initialState,
        searchStatus: "error",
      };
    case SEARCH_EMPTY:
      return {
        ...initialState,
        searchStatus: "empty",
      };
    case SEARCH_SUCCESS:
      return {
        searchStatus: "success",
        results: action.results,
      };
    case RESET_SEARCH:
      return initialState;
    default:
      return state;
  }
};

const searchFoodDatabase = (dispatch) => async (keyword) => {
  try {
    //
    dispatch({ type: "SEARCH_START" });

    const {
      data: { results },
    } = await nutritionAPI.get(`/food/search/${keyword}`);

    if (results.length) dispatch({ type: "SEARCH_SUCCESS", results });
    else dispatch({ type: "SEARCH_EMPTY" });
    //
  } catch (error) {
    dispatch({ type: "SEARCH_ERROR" });
  };

  const updateSearchSettings = (dispatch) => {

  }

  const initialState = {
    results: [],
    categories: [],
    dietFilters: [],
    healthFilters: [],
    searchStatus: "idle",
  };

  export const { Provider, Context } = createContext(
    foodSearchReducer,
    { actionCreator },
    initialState
  );

/*
  user settings

  DB email
  DB password
  DB all onboarding information





*/
