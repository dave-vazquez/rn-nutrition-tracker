import nutritionAPI from "_api/nutritionAPI";
import { NavigationService } from "_navigation/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createContext from "./helper/createContext";

const AUTHENTICATE_START = "AUTHENTICATE_START";
const AUTHENTICATE_FAIL = "AUTHENTICATE_FAIL";
const AUTHENTICATE_REFRESH = "AUTHENTICATE_REFRESH";

const initialState = {
  authFail: false,
  authStart: false,
  errorMessage: "",
};

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
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

const refreshAuth = (dispatch) => () => {
  dispatch({ type: AUTHENTICATE_REFRESH });
};

const tryLocalSignin = () => async () => {
  try {
    await nutritionAPI.get("/auth/validateToken");
    NavigationService.navigate("App");
  } catch (err) {
    NavigationService.navigate("Onboarding");
  }
};

const signup = (dispatch) => async (userInfo) => {
  dispatch({ type: AUTHENTICATE_START });

  try {
    const response = await nutritionAPI.post("/auth/signup", userInfo);

    await AsyncStorage.setItem("token", response.data.token);

    dispatch({ type: AUTHENTICATE_REFRESH });
    NavigationService.navigate("App");
    //
  } catch ({ response }) {
    dispatch({
      type: AUTHENTICATE_FAIL,
      errorMessage:
        response.status === 409
          ? "An account with this email address already exists"
          : "Unable to register at this time. Please try again later.",
    });
  }
};

const signin = (dispatch) => async (email, password) => {
  dispatch({ type: AUTHENTICATE_START });

  try {
    const response = await nutritionAPI.post("/auth/signin", {
      email,
      password,
    });

    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: AUTHENTICATE_REFRESH });
    NavigationService.navigate("App");
    //
  } catch ({ response }) {
    dispatch({
      type: AUTHENTICATE_FAIL,
      errorMessage:
        response.status === 401
          ? "Email or Password is invalid"
          : "Unable to sign in at this time. Please try again later.",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: AUTHENTICATE_REFRESH });
  NavigationService.navigate("Onboarding");
};

export const { Provider, Context } = createContext(
  authReducer,
  {
    signin,
    signup,
    signout,
    refreshAuth,
    tryLocalSignin,
  },
  initialState
);
