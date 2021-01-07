import { useCallback, useRef } from "react";

const useFocusNextInput = () => {
  const inputs = useRef({});

  const setRef = useCallback((id, input) => {
    inputs.current[id] = input;
  }, []);

  const focusNextInput = (id) => {
    inputs.current[id].focus();
  };

  return [setRef, focusNextInput];
};

export default useFocusNextInput;
