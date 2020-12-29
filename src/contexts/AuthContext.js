import AsyncStorage from "@react-native-async-storage/async-storage";
import NavigationService from "../NavigationService";
import nutritionAPI from "../api/nutritionAPI";
import createContext from "./createContext";

const AUTHENTICATE_START = "AUTHENTICATE_START";
const AUTHENTICATE_FAIL = "AUTHENTICATE_FAIL";
const AUTHENTICATE_REFRESH = "AUTHENTICATE_REFRESH";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_MEASUREMENTS = "UPDATE_MEASUREMENTS";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTHENTICATE_REFRESH:
      return initialState;
    case AUTHENTICATE_START:
      return {
        ...initialState,
        authStart: true,
      };
    case AUTHENTICATE_FAIL:
      return {
        ...state,
        authStart: false,
        authFail: true,
        errorMessage: action.payload,
      };
    case UPDATE_GENDER:
      return {
        ...state,
        gender: action.gender,
      };
    case UPDATE_MEASUREMENTS:
      return {
        ...state,
        feet: action.payload.feet,
        inches: action.payload.inches,
        weight: action.payload.weight,
        dateOfBirth: action.payload.dateOfBirth,
      };
    default:
      return state;
  }
};

const refreshAuth = (dispatch) => () => {
  dispatch({ type: AUTHENTICATE_REFRESH });
};

const tryLocalSignin = () => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    NavigationService.navigate("Journal");
  } else {
    NavigationService.navigate("SignUp");
  }
};

const createAccount = (dispatch) => async (email, password) => {
  dispatch({ type: AUTHENTICATE_START });

  try {
    const response = await nutritionAPI.post("/auth/register", {
      email,
      password,
    });
    await AsyncStorage.setItem("token", response.data.token);

    NavigationService.navigate("Journal");
  } catch (error) {
    dispatch({
      type: AUTHENTICATE_FAIL,
      errorMessage: "Unable to register at this time. Please try again later.",
    });
  }
};

const signin = (dispatch) => async (email, password) => {
  try {
    const response = await nutritionAPI.post("/auth/login", {
      email,
      password,
    });
    await AsyncStorage.setItem("token", response.data.token);

    NavigationService.navigate("Journal");
  } catch (error) {
    dispatch({
      type: AUTHENTICATE_FAIL,
      errorMessage: "Unable to register at this time. Please try again later.",
    });
  }
};

const signout = () => async () => {
  await AsyncStorage.removeItem("token");
  NavigationService.navigate("SignIn");
};

const updateGender = (dispatch) => (gender) => {
  dispatch({ type: UPDATE_GENDER, payload: gender });
  NavigationService.navigate("Measurements");
};

const updateMeasurements = (dispatch) => (measurements) => {
  dispatch({ type: UPDATE_MEASUREMENTS, payload: measurements });
  NavigationService.navigate("WeightGoal");
};

const initialState = {
  authStart: false,
  authFail: false,
  errorMessage: "",
  gender: "",
  feet: "",
  inches: "",
  weight: "",
  dateOfBirth: "",
};

export const { Provider, Context } = createContext(
  authReducer,
  {
    createAccount,
    refreshAuth,
    tryLocalSignin,
    signout,
    signin,
    updateGender,
    updateMeasurements,
  },
  initialState
);
