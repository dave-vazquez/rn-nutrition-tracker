import nutritionAPI from "_api/nutritionAPI";
import createContext from "./helper/createContext";

const FOOD_SEARCH_START = "FOOD_SEARCH_START";
const FOOD_SEARCH_ERROR = "FOOD_SEARCH_ERROR";
const FOOD_SEARCH_SUCCESS = "FOOD_SEARCH_SUCCESS";
const FOOD_SEARCH_EMPTY = "FOOD_SEARCH_EMPTY";
const RESET_SEARCH = "RESET_SEARCH";

const initialState = {
  start: false,
  error: false,
  empty: false,
  complete: false,
  results: [],
};

const foodSearchReducer = (state, action) => {
  switch (action.type) {
    case FOOD_SEARCH_START:
      return {
        ...initialState,
        start: true,
        complete: false,
      };
    case FOOD_SEARCH_ERROR:
      return {
        ...initialState,
        error: true,
        complete: true,
      };
    case FOOD_SEARCH_EMPTY:
      return {
        ...initialState,
        empty: true,
        complete: true,
        results: [],
      };
    case FOOD_SEARCH_SUCCESS:
      return {
        ...initialState,
        complete: true,
        results: action.results,
      };
    case RESET_SEARCH:
      return initialState;
    default:
      return state;
  }
};

const searchFoodDatabase = (dispatch) => async (keyword) => {
  dispatch({ type: FOOD_SEARCH_START });
  try {
    const {
      data: { results },
    } = await nutritionAPI.get(`/food/search/${keyword}`);

    if (results.length) dispatch({ type: FOOD_SEARCH_SUCCESS, results });
    else dispatch({ type: FOOD_SEARCH_EMPTY });
    //
  } catch (error) {
    dispatch({ type: FOOD_SEARCH_ERROR });
  }
};

const resetSearch = (dispatch) => () => {
  dispatch({ type: RESET_SEARCH });
};

export const { Provider, Context } = createContext(
  foodSearchReducer,
  { searchFoodDatabase, resetSearch },
  initialState
);
