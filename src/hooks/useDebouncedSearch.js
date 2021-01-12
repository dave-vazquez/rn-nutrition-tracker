import nutritionAPI from "_api/nutritionAPI";
import { useEffect, useReducer } from "react";
import useDebounce from "./useDebounce";

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...initialState,
        start: true,
      };
    case "SEARCH_ERROR":
      return {
        ...initialState,
        error: true,
      };
    case "SEARCH_EMPTY":
      return {
        ...initialState,
        empty: true,
        results: [],
      };
    case "SEARCH_SUCCESS":
      return {
        ...initialState,
        results: action.results,
      };
    case "RESET_SEARCH":
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  start: false,
  error: false,
  empty: false,
  results: [],
};

const useDebouncedSearch = (keyword, delay) => {
  const debouncedKeyword = useDebounce(keyword, delay);

  const [{ results, ...status }, dispatch] = useReducer(reducer, initialState);

  const reset = () => dispatch({ type: "RESET_SEARCH" });

  const search = async (debouncedKeyword) => {
    try {
      dispatch({ type: "SEARCH_START" });

      const {
        data: { results },
      } = await nutritionAPI.get(`/food/search/${debouncedKeyword}`);

      if (results.length) {
        dispatch({ type: "SEARCH_SUCCESS", results });
      } else {
        dispatch({ type: "SEARCH_EMPTY" });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "SEARCH_ERROR" });
    }
  };

  useEffect(() => {
    if (debouncedKeyword) search(debouncedKeyword);
  }, [debouncedKeyword]);

  return [results, status, reset];
};

export default useDebouncedSearch;
