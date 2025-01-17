import { Context as AuthContext } from "_contexts/AuthContext";
import { useContext, useEffect } from "react";

const AuthResolutionScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, [tryLocalSignin]);

  return null;
};

export default AuthResolutionScreen;
