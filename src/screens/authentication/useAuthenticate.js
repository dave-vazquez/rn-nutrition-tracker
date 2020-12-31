/* eslint-disable prettier/prettier */
import { Context as AuthContext } from "/contexts/AuthContext";
import { Context as OnboardingContext } from "/contexts/OnboardingContext";
import { useCallback, useContext } from "react";

const useAuthenticate = (authType) => {
  const {
    state: { authStart, authFail, errorMessage },
    signup,
    signin,
  } = useContext(AuthContext);

  const { state: onboardingState } = useContext(OnboardingContext);

  const authenticate = useCallback(
    (email, password) => {
      authType === "signin"
        ? signin(email, password)
        : signup({
          email,
          password,
          gender: onboardingState.gender,
          height_ft: onboardingState.heightFt,
          height_in: onboardingState.heightIn,
          weight_lbs: onboardingState.weightLbs,
          date_of_birth: onboardingState.dateOfBirth,
          activity_level: onboardingState.activityLevel,
          target_weight_lbs: onboardingState.targetWeightLbs,
          target_net_weekly_change_lbs: onboardingState.netWeeklyChangeLbs,
        });
    },
    [authType, signin, signup, onboardingState]
  );

  return [authenticate, authStart, authFail, errorMessage];
};

export default useAuthenticate;
