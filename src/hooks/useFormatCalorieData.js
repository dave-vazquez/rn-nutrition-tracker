import g from "_globalstyles";
import { useEffect, useState } from "react";

const useFormatCalorieData = (consumed, added, budget) => {
  const balance = budget - (consumed + added);
  const underBudget = consumed + added < budget;

  const [{ data, colors }, setData] = useState({
    data: [
      {
        consumed: balance,
        added,
        budget,
      },
    ],
    colors: g.budget_palette.cals,
  });

  useEffect(() => {
    if (underBudget) {
      setData({
        data: [
          {
            consumed,
            added,
            budget: balance,
          },
        ],
        colors: g.budget_palette.cals,
      });
    } else {
      // when over budget, "consumed" is set to maximum amount: "budget"
      // "added" and "budget" are set to 0, so "consumed" fills the entire bar
      setData({
        data: [
          {
            consumed: budget,
            budget: 0,
            added: 0,
          },
        ],
        colors: g.budget_palette.cals_exceeded,
      });
    }
  }, [added, budget, balance, consumed, underBudget]);

  return [data, colors];
};

export default useFormatCalorieData;
