import { NavigationActions, StackActions } from "react-navigation";

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params, nestedRoute) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action: nestedRoute
        ? NavigationActions.navigate({
          nestedRoute,
        })
        : undefined,
    })
  );
};

const resetStack = (index, routeName) => {
  _navigator.dispatch(
    StackActions.reset({
      index: index,
      actions: [NavigationActions.navigate({ routeName })],
    })
  );
};

export default {
  navigate,
  resetStack,
  setTopLevelNavigator,
};
