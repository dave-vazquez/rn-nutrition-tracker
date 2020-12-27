import AsyncStorage from "@react-native-async-storage/async-storage";
import NavigationService from "../NavigationService";
import nutritionAPI from "../api/nutritionAPI";
import createContext from "./createContext";

const AUTHENTICATE_START = "AUTHENTICATE_START";
const AUTHENTICATE_FAIL = "AUTHENTICATE_FAIL";
const AUTHENTICATE_REFRESH = "AUTHENTICATE_REFRESH";

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

const initialState = {
  authStart: false,
  authFail: false,
  errorMessage: "",
};

export const { Provider, Context } = createContext(
  authReducer,
  { createAccount, refreshAuth, tryLocalSignin, signout, signin },
  initialState
);
