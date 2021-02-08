import createContext from "./helper/createContext";

const UPDATE_WEIGHT_GOAL = "UPDATE_WEIGHT_GOAL";
const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_USER_INFO = "UPDATE_USER_INFO";

const initialState = {
  gender: "male",
  heightFt: "",
  heightIn: "",
  weightLbs: "",
  dateOfBirth: "",
  targetWeightLbs: "",
  netWeeklyChangeLbs: 0,
  activityLevel: 1.2,
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
      };
    case UPDATE_USER_INFO:
      return {
        ...state,
        dateOfBirth: action.dateOfBirth,
        heightFt: action.heightFt,
        heightIn: action.heightIn,
        netWeeklyChangeLbs: action.netWeeklyChangeLbs,
        targetWeightLbs: action.targetWeightLbs,
        weightLbs: action.weightLbs,
      };
  }
};

const updateWeightGoal = (dispatch) => (weightGoal, navigationCallback) => {
  dispatch({ type: UPDATE_WEIGHT_GOAL, weightGoal });
  navigationCallback();
};

const updateActivityLevel = (dispatch) => (activityLevel) => {
  dispatch({ type: UPDATE_ACTIVITY, activityLevel });
};

const updateGender = (dispatch) => (gender) => {
  dispatch({ type: UPDATE_GENDER, gender });
};

const updateUserInfo = (dispatch) => (userInfo, navigationCallback) => {
  dispatch({ type: UPDATE_USER_INFO, ...userInfo });
  navigationCallback();
};

export const { Provider, Context } = createContext(
  authReducer,
  {
    updateGender,
    updateActivityLevel,
    updateWeightGoal,
    updateUserInfo,
  },
  initialState
);
