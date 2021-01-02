import createContext from "./helper/createContext";

const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_MEASUREMENTS = "UPDATE_MEASUREMENTS";
const UPDATE_TARGET_WEIGHT = "UPDATE_TARGET_WEIGHT";
const UPDATE_NET_WEEKLY_CHANGE = "UPDATE_NET_WEEKLY_CHANGE";
const UPDATE_WEIGHT_GOAL = "UPDATE_WEIGHT_GOAL";
const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";

const initialState = {
  gender: "",
  heightFt: "",
  heightIn: "",
  weightLbs: "",
  dateOfBirth: "",
  targetWeightLbs: "",
  netWeeklyChangeLbs: 0,
  activityLevel: 1.375,
  weightGoal: "",
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
    case UPDATE_WEIGHT_GOAL:
      return {
        ...state,
        weightGoal: action.weightGoal,
        targetWeightLbs: action.targetWeightLbs,
      };
    case UPDATE_TARGET_WEIGHT:
      return {
        ...state,
        targetWeightLbs: action.targetWeightLbs,
      };
    case UPDATE_NET_WEEKLY_CHANGE:
      return {
        ...state,
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

const updateWeightGoal = (dispatch) => (weightGoal, targetWeightLbs = "") => {
  dispatch({
    type: UPDATE_WEIGHT_GOAL,
    targetWeightLbs,
    weightGoal,
  });
};

const updateTargetWeight = (dispatch) => (targetWeightLbs) => {
  dispatch({ type: UPDATE_TARGET_WEIGHT, targetWeightLbs });
};

const updateNetWeeklyChange = (dispatch) => (netWeeklyChangeLbs) => {
  dispatch({ type: UPDATE_NET_WEEKLY_CHANGE, netWeeklyChangeLbs });
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
  {
    updateGender,
    updateMeasurements,
    updateActivityLevel,
    updateTargetWeight,
    updateNetWeeklyChange,
    updateWeightGoal,
  },
  initialState
);
