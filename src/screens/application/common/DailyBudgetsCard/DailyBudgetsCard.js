import { Card } from "_components/common";
import { Context as JournalContext } from "_contexts/JournalContext";
import { Colors, Layout } from "_global_styles";
import { toPrecision } from "_utils";
import PropTypes from "prop-types";
import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";
import CalorieBar from "./CalorieBar";
import MacroWheel from "./MacroWheel";

const DailyBudgetsCard = ({ added, quantity }) => {
  const {
    state: { budgets, consumed },
  } = useContext(JournalContext);

  return (
    <Card bgColor={Colors.green.light.s3}>
      <CalorieBar
        added={toPrecision((added.calories_kcal?.amount || 0) * quantity, 0)}
        budget={budgets.calories_kcal}
        consumed={consumed.calories_kcal}
      />
      <View style={s.macros}>
        <MacroWheel
          title="Fats"
          added={toPrecision((added.fat_g?.amount || 0) * quantity, 0)}
          budget={budgets.fat_g}
          consumed={consumed.fat_g}
        />
        <MacroWheel
          title="Carbs"
          added={toPrecision((added.carbs_g?.amount || 0) * quantity, 0)}
          budget={budgets.carbs_g}
          consumed={consumed.carbs_g}
        />
        <MacroWheel
          title="Protein"
          added={toPrecision((added.protein_g?.amount || 0) * quantity, 0)}
          budget={budgets.protein_g}
          consumed={consumed.protein_g}
        />
      </View>
    </Card>
  );
};

const s = StyleSheet.create({
  macros: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Layout.spacing.md,
  },
});

DailyBudgetsCard.defaultProps = {
  added: {
    fat_g: {
      amount: 0,
    },
    carbs_g: {
      amount: 0,
    },
    protein_g: {
      amount: 0,
    },
    calories_kcal: {
      amount: 0,
    },
  },
  quantity: 1,
};

DailyBudgetsCard.propTypes = {
  added: PropTypes.object,
  quantity: PropTypes.number,
};

DailyBudgetsCard.whyDidYouRender = true;

export default memo(DailyBudgetsCard);
