import nutritionAPI from "_api/nutritionAPI";
import dayjs, { deviceTimeZone } from "_utils/dayjs";
import createContext from "./helper/createContext";

const FETCH_ENTRIES_START = "FETCH_ENTRIES_START";
const FETCH_ENTRIES_ERROR = "FETCH_ENTRIES_ERROR";
const FETCH_ENTRIES_SUCCESS = "FETCH_ENTRIES_SUCCESS";
const CREATE_ENTRY_START = "CREATE_ENTRY_START";
const CREATE_ENTRY_ERROR = "CREATE_ENTRY_ERROR";
const CREATE_ENTRY_SUCCESS = "CREATE_ENTRY_SUCCESS";
const UPDATE_CURRENT_DATE = "UPDATE_CURRENT_DATE";

const initialState = {
  currentDate: new Date(),
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
        currentDate: action.currentDate,
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
      };
    case UPDATE_CURRENT_DATE:
      return {
        ...state,
        currentDate: action.currentDate,
      };
    default:
      return state;
  }
};

const fetchJournal = (dispatch) => async (entryDate, navCallBack) => {
  dispatch({ type: FETCH_ENTRIES_START });

  try {
    const { data } = await nutritionAPI.get(
      `/journal/${dayjs(entryDate).tz(deviceTimeZone).format()}`
    );

    dispatch({
      type: FETCH_ENTRIES_SUCCESS,
      currentDate: entryDate,
      budgets: data.budgets,
      consumed: data.consumed,
      entries: data.entries,
    });

    if (navCallBack) navCallBack();
    //
  } catch (error) {
    dispatch({ type: FETCH_ENTRIES_ERROR });
  }
};

const createJournalEntry = (dispatch) => async (
  entry,
  nutrition,
  navCallBack
) => {
  dispatch({ type: CREATE_ENTRY_START });

  try {
    await nutritionAPI.post("/journal", {
      nutrition: {
        fat_g: +nutrition.fat_g.amount * +entry.quantity,
        carbs_g: +nutrition.carbs_g.amount * +entry.quantity,
        protein_g: +nutrition.protein_g.amount * +entry.quantity,
        calories_kcal: +nutrition.calories_kcal.amount * +entry.quantity,
      },
      journal_entry: {
        food_id: entry.foodId,
        food_name: entry.label,
        brand_name: entry.brand,
        quantity: entry.quantity,
        meal_type: entry.mealType.value,
        measure_name: entry.measure.label,
        entry_date: dayjs(entry.date).tz(deviceTimeZone).format(),
        measure_uri: entry.measure.measureURI,
        time_zone_name: deviceTimeZone,
        time_zone_abbr: "EST",
      },
    });

    dispatch({ type: CREATE_ENTRY_SUCCESS });

    navCallBack();
  } catch ({ response }) {
    dispatch({ type: CREATE_ENTRY_ERROR });
  }
};

const updateCurrentDate = (dispatch) => (newDate, navCallback) => {
  dispatch({ type: UPDATE_CURRENT_DATE, currentDate: newDate });
  navCallback();
};

export const { Provider, Context } = createContext(
  journalReducer,
  {
    fetchJournal,
    createJournalEntry,
    updateCurrentDate,
  },
  initialState
);
