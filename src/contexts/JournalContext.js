import nutritionAPI from "_api/nutritionAPI";
import createContext from "./helper/createContext";

const FETCH_ENTRIES_START = "FETCH_ENTRIES_START";
const FETCH_ENTRIES_ERROR = "FETCH_ENTRIES_ERROR";
const FETCH_ENTRIES_SUCCESS = "FETCH_ENTRIES_SUCCESS";
const CREATE_ENTRY_START = "CREATE_ENTRY_START";
const CREATE_ENTRY_ERROR = "CREATE_ENTRY_ERROR";
const CREATE_ENTRY_SUCCESS = "CREATE_ENTRY_SUCCESS";

const initialState = {
  date: new Date(),
  fetchStatus: "started",
  createStatus: "idle",
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
  entries: [],
};

const journalReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ENTRIES_START:
      return {
        ...state,
        fetchStatus: "start",
      };
    case FETCH_ENTRIES_ERROR:
      return {
        ...state,
        fetchStatus: "error",
      };
    case FETCH_ENTRIES_SUCCESS:
      return {
        ...state,
        fetchStatus: "success",
        budgets: action.budgets,
        consumed: action.consumed,
      };
    case CREATE_ENTRY_START:
      return {
        ...state,
        createStatus: "start",
      };
    case CREATE_ENTRY_ERROR:
      return {
        ...state,
        createStatus: "error",
      };
    case CREATE_ENTRY_SUCCESS:
      return {
        ...state,
        createStatus: "success",
        entries: action.entries,
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
        calories_kcal: 423,
      },
    });
    //
  } catch (error) {
    dispatch({ type: FETCH_ENTRIES_ERROR });
  }
};

const createJournalEntry = (dispatch, state) => async (
  journalEntry,
  navCallBack
) => {
  dispatch({ type: CREATE_ENTRY_START });

  try {
    const response = await nutritionAPI.post(
      `/journal/${state.date.toISOString()}`,
      journalEntry
    );

    dispatch({
      type: CREATE_ENTRY_SUCCESS,
      entries: response.data.entries ? response.data.entries : state.entries,
    });

    navCallBack();
  } catch ({ response }) {
    dispatch({ type: CREATE_ENTRY_ERROR });
  }
};

export const { Provider, Context } = createContext(
  journalReducer,
  { fetchJournalEntries, createJournalEntry },
  initialState
);
