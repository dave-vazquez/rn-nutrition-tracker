import nutritionAPI from "_api/nutritionAPI";
import createContext from "./helper/createContext";

const FETCH_ENTRIES_START = "FETCH_ENTRIES_START";
const FETCH_ENTRIES_FAIL = "FETCH_ENTRIES_FAIL";
const FETCH_ENTRIES_SUCCESS = "FETCH_ENTRIES_SUCCESS";

const initialState = {
  fetchFail: false,
  fetchStart: false,
  fetchSuccess: false,
  budgets: {
    caloricBudgetCal: 0,
    fatBudgetGrams: 0,
    carbBudgetGrams: 0,
    proteinBudgetGrams: 0,
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
      };
    default:
      return state;
  }
};

const fetchJournalEntries = (dispatch) => async () => {
  dispatch({ type: FETCH_ENTRIES_START });

  try {
    const response = await nutritionAPI.get("/journal/2020-01-01");
    dispatch({ type: FETCH_ENTRIES_SUCCESS, budgets: response.data.budgets });
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
