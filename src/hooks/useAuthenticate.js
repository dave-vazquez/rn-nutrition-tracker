/* eslint-disable prettier/prettier */
import { Context as AuthContext } from "_contexts/AuthContext";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import { useCallback, useContext } from "react";

const useAuthenticate = (authType) => {
  const {
    state: { authStart, authFail, errorMessage },
    signup,
    signin,
    refreshAuth,
  } = useContext(AuthContext);

  const { state: user } = useContext(OnboardingContext);

  const authenticate = useCallback(
    ({ email, password }) => {
      authType === "signin"
        ? signin(email, password)
        : signup({
          email,
          password,
          gender: user.gender,
          height_ft: user.heightFt,
          height_in: user.heightIn,
          weight_lbs: user.weightLbs,
          date_of_birth: user.dateOfBirth,
          activity_level: user.activityLevel,
          target_weight_lbs: user.weightGoal === "maintain" ? user.weightLbs : user.targetWeightLbs,
          target_net_weekly_change_lbs: user.weightGoal === "maintain" ? 0 : user.netWeeklyChangeLbs,
        });
    },
    [authType, signin, signup, user]
  );

  return [authenticate, refreshAuth, authStart, authFail, errorMessage];
};

export default useAuthenticate;
