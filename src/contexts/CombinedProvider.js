import React from "react";
import { Provider as AuthProvider } from "./AuthContext";
import { Provider as FoodSearchProvider } from "./FoodSearchContext";
import { Provider as JournalProvider } from "./JournalContext";
import { Provider as OnboardingProvider } from "./OnboardingContext";

const CombinedProvider = ({ children }) => {
  return (
    <AuthProvider>
      <OnboardingProvider>
        <JournalProvider>
          <FoodSearchProvider>{children}</FoodSearchProvider>
        </JournalProvider>
      </OnboardingProvider>
    </AuthProvider>
  );
};

export default CombinedProvider;
