import nutritionAPI from "_api/nutritionAPI";
import createContext from "./helper/createContext";

const FETCH_ENTRIES_START = "FETCH_ENTRIES_START";
const FETCH_ENTRIES_FAIL = "FETCH_ENTRIES_FAIL";
const FETCH_ENTRIES_SUCCESS = "FETCH_ENTRIES_SUCCESS";

const initialState = {
  fetchFail: false,
  fetchStart: true,
  fetchSuccess: false,
  budgets: {
    caloriesKcal: 0,
    fatGrams: 0,
    carbGrams: 0,
    proteinGrams: 0,
  },
  consumed: {
    caloriesKcal: 0,
    fatGrams: 0,
    carbGrams: 0,
    proteinGrams: 0,
  },
};

const journalReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ENTRIES_START:
      return {
        ...state,
        fetchFail: false,
        fetchStart: true,
        fetchSuccess: false,
      };
    case FETCH_ENTRIES_FAIL:
      return {
        ...state,
        fetchFail: true,
        fetchStart: false,
        fetchSuccess: false,
      };
    case FETCH_ENTRIES_SUCCESS:
      return {
        ...state,
        fetchFail: false,
        fetchStart: false,
        fetchSuccess: true,
        budgets: action.budgets,
        consumed: action.consumed,
      };
    default:
      return state;
  }
};

const fetchJournalEntries = (dispatch) => async () => {
  dispatch({ type: FETCH_ENTRIES_START });

  try {
    const response = await nutritionAPI.get("/journal/2020-01-01");
    dispatch({
      type: FETCH_ENTRIES_SUCCESS,
      budgets: response.data.budgets,
      consumed: {
        caloriesKcal: 500,
        fatGrams: 18,
        carbGrams: 25,
        proteinGrams: 38,
      },
    });
    //
  } catch (error) {
    dispatch({ type: FETCH_ENTRIES_FAIL });
  }
};

export const { Provider, Context } = createContext(
  journalReducer,
  { fetchJournalEntries },
  initialState
);
