import { useEffect, useState } from "react";

const useDebounce = (value, timeout) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => clearTimeout(handler);
  }, [value, timeout]);

  return debouncedValue;
};

export default useDebounce;
