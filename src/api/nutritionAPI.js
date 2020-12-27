import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getEnvVars from "../environment";

const { serverURL } = getEnvVars();

const nutritionAPI = axios.create({
  baseURL: serverURL,
});

nutritionAPI.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default nutritionAPI;
