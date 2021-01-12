import { useCallback, useEffect } from "react";
import { Keyboard } from "react-native";

const useHideTabNavigator = (navigation) => {
  const keyboardDidShow = useCallback(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  }, [navigation]);

  const keyboardDidHide = useCallback(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  }, [navigation]);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  });
};

export default useHideTabNavigator;
