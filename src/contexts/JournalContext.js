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
    fat_g: 0,
    carbs_g: 0,
    protein_g: 0,
    calories_kcal: 0,
  },
  consumed: {
    fat_g: 0,
    carbs_g: 0,
    protein_g: 0,
    calories_kcal: 0,
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
    const response = await nutritionAPI.get("/journal/2020-01-02");
    dispatch({
      type: FETCH_ENTRIES_SUCCESS,
      budgets: response.data.budgets,
      consumed: {
        fat_g: 18,
        carbs_g: 25,
        protein_g: 38,
        calories_kcal: 500,
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
