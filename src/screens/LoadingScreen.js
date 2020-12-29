import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../contexts/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, [tryLocalSignin]);

  return null;
};

export default ResolveAuthScreen;
