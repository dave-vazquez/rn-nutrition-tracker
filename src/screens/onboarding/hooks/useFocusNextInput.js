import React, { useCallback, useRef } from "react";

const useFocusNextInput = () => {
  const inputs = useRef({});

  const setRef = useCallback((input) => {
    console.log("called with", input.props.nativeID);
    inputs.current[input.props.nativeID] = input;
  }, []);

  const focusNextInput = (nativeId) => {
    inputs.current[nativeId].focus();
  };

  return [setRef, focusNextInput];
};

export default useFocusNextInput;
