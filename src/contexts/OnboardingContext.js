import createContext from "./helper/createContext";

const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_MEASUREMENTS = "UPDATE_MEASUREMENTS";
const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
const UPDATE_GOALS = "UPDATE_GOALS";

const initialState = {
  gender: "",
  heightFt: "",
  heightIn: "",
  weightLbs: "",
  dateOfBirth: "",
  targetWeightLbs: "",
  netWeeklyChangeLbs: 0,
  activityLevel: 1.375,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_GENDER:
      return {
        ...state,
        gender: action.gender,
      };
    case UPDATE_ACTIVITY:
      return {
        ...state,
        activityLevel: action.activityLevel,
      };
    case UPDATE_GOALS:
      return {
        ...state,
        targetWeightLbs: action.targetWeightLbs,
        netWeeklyChangeLbs: action.netWeeklyChangeLbs,
      };
    case UPDATE_MEASUREMENTS:
      return {
        ...state,
        heightFt: action.heightFt,
        heightIn: action.heightIn,
        weightLbs: action.weightLbs,
        dateOfBirth: action.dateOfBirth,
      };
  }
};

const updateGender = (dispatch) => (gender, navigationCallback) => {
  dispatch({ type: UPDATE_GENDER, gender });
  navigationCallback();
};

const updateActivityLevel = (dispatch) => (activityLevel) => {
  dispatch({ type: UPDATE_ACTIVITY, activityLevel });
};

const updateGoals = (dispatch) => (
  { targetWeightLbs, netWeeklyChangeLbs },
  navigationCallback
) => {
  dispatch({ type: UPDATE_GOALS, targetWeightLbs, netWeeklyChangeLbs });
  navigationCallback();
};

const updateMeasurements = (dispatch) => (
  { heightFt, heightIn, weightLbs, dateOfBirth },
  navigationCallback
) => {
  dispatch({
    type: UPDATE_MEASUREMENTS,
    heightFt,
    heightIn,
    weightLbs,
    dateOfBirth,
  });

  navigationCallback();
};

export const { Provider, Context } = createContext(
  authReducer,
  { updateGender, updateMeasurements, updateActivityLevel, updateGoals },
  initialState
);
