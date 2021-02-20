import { Card } from "_components/common";
import { Context as JournalContext } from "_contexts/JournalContext";
import { Colors, Layout } from "_global_styles";
import PropTypes from "prop-types";
import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";
import CalorieBar from "./CalorieBar";
import MacroWheel from "./MacroWheel";

const DailyBudgetsCard = ({ added }) => {
  const {
    state: { budgets, consumed },
  } = useContext(JournalContext);

  return (
    <Card bgColor={Colors.green.light.s3}>
      <CalorieBar
        added={added.calories_kcal}
        budget={budgets.calories_kcal}
        consumed={consumed.calories_kcal}
      />
      <View style={s.macros}>
        <MacroWheel
          title="Fats"
          added={added.fat_g}
          budget={budgets.fat_g}
          consumed={consumed.fat_g}
        />
        <MacroWheel
          title="Carbs"
          added={added.carbs_g}
          budget={budgets.carbs_g}
          consumed={consumed.carbs_g}
        />
        <MacroWheel
          title="Protein"
          added={added.protein_g}
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
    fat_g: 0,
    carbs_g: 0,
    protein_g: 0,
    calories_kcal: 0,
  },
};

DailyBudgetsCard.propTypes = {
  added: PropTypes.shape({
    fat_g: PropTypes.number.isRequired,
    carbs_g: PropTypes.number.isRequired,
    protein_g: PropTypes.number.isRequired,
    calories_kcal: PropTypes.number.isRequired,
  }),
};

DailyBudgetsCard.whyDidYouRender = true;

export default memo(DailyBudgetsCard);
