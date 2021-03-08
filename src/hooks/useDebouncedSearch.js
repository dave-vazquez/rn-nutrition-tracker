import nutritionAPI from "_api/nutritionAPI";
import { useCallback, useEffect, useReducer, useRef } from "react";
import useDebounce from "./useDebounce";

const MAX_INDEX = 120;

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...state,
        searchStatus: "started",
      };
    case "SEARCH_ERROR":
      return {
        ...initialState,
        searchStatus: "error",
      };
    case "SEARCH_EMPTY":
      return {
        ...initialState,
        searchStatus: "empty",
      };
    case "SEARCH_SUCCESS":
      return {
        searchStatus: "success",
        results: [...state.results, ...action.results],
      };
    case "RESET_SEARCH":
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  results: [],
  searchStatus: "idle",
};

const useDebouncedSearch = (keyword, delay) => {
  const nextIndexRef = useRef(0);
  const debouncedKeyword = useDebounce(keyword, delay);

  const [{ results, searchStatus }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const searchFoodDatabase = useCallback(async () => {
    try {
      dispatch({ type: "SEARCH_START" });

      const { data } = await nutritionAPI.get(
        `/food/search/${debouncedKeyword}/${nextIndexRef.current}`
      );

      if (data.results.length) {
        nextIndexRef.current = data.nextIndex;
        dispatch({ type: "SEARCH_SUCCESS", results: data.results });
      } else {
        dispatch({ type: "SEARCH_EMPTY" });
      }
    } catch (error) {
      dispatch({ type: "SEARCH_ERROR" });
    }
  }, [debouncedKeyword]);

  const fetchNextResults = () => {
    if (nextIndexRef.current <= MAX_INDEX) searchFoodDatabase();
  };

  const resetSearch = () => {
    nextIndexRef.current = 0;
    dispatch({ type: "RESET_SEARCH" });
  };

  useEffect(() => {
    if (debouncedKeyword && nextIndexRef.current <= MAX_INDEX)
      searchFoodDatabase();
  }, [debouncedKeyword, searchFoodDatabase]);

  return [results, resetSearch, fetchNextResults, searchStatus];
};

export default useDebouncedSearch;
