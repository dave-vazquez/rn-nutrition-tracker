import { Card } from "_components/common";
import { Context as JournalContext } from "_contexts/JournalContext";
import g from "_globalstyles";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import CalorieBar from "./CalorieBar";
import MacroWheel from "./MacroWheel";

const DailyBudgetsCard = ({ added }) => {
  const {
    state: { budgets, consumed },
  } = useContext(JournalContext);

  return (
    <Card bgColor={g.color.green_light_3}>
      <CalorieBar
        added={added?.calories_kcal || 0}
        budget={budgets.calories_kcal}
        consumed={consumed.calories_kcal}
      />
      <View style={s.macros}>
        <MacroWheel
          title="Fats"
          added={added?.fat_g || 0}
          budget={budgets.fat_g}
          consumed={consumed.fat_g}
        />
        <MacroWheel
          title="Carbs"
          added={added?.carbs_g || 0}
          budget={budgets.carbs_g}
          consumed={consumed.carbs_g}
        />
        <MacroWheel
          title="Protein"
          added={added?.protein_g || 0}
          budget={budgets.protein_g}
          consumed={consumed.protein_g}
        />
      </View>
    </Card>
  );
};

const s = StyleSheet.create({
  macros: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DailyBudgetsCard;

/*

  card: {
    padding: 0,
    marginTop: 0,
    elevation: 3,
    borderWidth: 0,
    borderRadius: 5,
    shadowRadius: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowOpacity: 2,
    shadowColor: "#00000030",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: g.color.white,
  },

  <LinearGradient
    style={s.gradient}
    end={{ x: 1, y: 0.5 }}
    start={{ x: 0, y: 0.5 }}
    locations={[0.5, 1]}
    colors={["#D3E9AB", "#DFE9CC"]}
  >

*/
