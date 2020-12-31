import NavigationService from "/NavigationService";
import createContext from "./helper/createContext";

const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_MEASUREMENTS = "UPDATE_MEASUREMENTS";
const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
const UPDATE_GOALS = "UPDATE_GOALS";

const initialState = {
  gender: "male",
  heightFt: 5,
  heightIn: 11,
  weightLbs: 180,
  dateOfBirth: "09/29/1987",
  targetWeightLbs: 160,
  netWeeklyChangeLbs: -0.5,
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

const updateGender = (dispatch) => (gender) => {
  dispatch({ type: UPDATE_GENDER, gender });

  NavigationService.navigate("Measurements");
};

const updateActivityLevel = (dispatch) => (activityLevel) => {
  dispatch({ type: UPDATE_ACTIVITY, activityLevel });
};

const updateGoals = (dispatch) => (targetWeightLbs, netWeeklyChangeLbs) => {
  dispatch({ type: UPDATE_ACTIVITY, targetWeightLbs, netWeeklyChangeLbs });
};

const updateMeasurements = (dispatch) => ({
  heightFt,
  heightIn,
  weightLbs,
  dateOfBirth,
}) => {
  dispatch({
    type: UPDATE_MEASUREMENTS,
    heightFt,
    heightIn,
    weightLbs,
    dateOfBirth,
  });

  NavigationService.navigate("ActivityLevel");
};

export const { Provider, Context } = createContext(
  authReducer,
  { updateGender, updateMeasurements, updateActivityLevel, updateGoals },
  initialState
);
