import axios from "axios";
import getEnvVars from "environment";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
