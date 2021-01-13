import g from "_globalstyles";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";
import CalorieBar from "./CalorieBar";
import MacroWheel from "./MacroWheel";

const BudgetCard = ({ budgets, consumed }) => {
  //
  return (
    <Card containerStyle={s.card}>
      <LinearGradient
        style={s.gradient}
        end={{ x: 1, y: 0.5 }}
        start={{ x: 0, y: 0.5 }}
        locations={[0.5, 1]}
        colors={["#D3E9AB", "#DFE9CC"]}
      >
        <CalorieBar
          budget={budgets.caloriesKcal}
          consumed={consumed.caloriesKcal}
          colors={[g.color.green_light_4, g.color.white]}
        />
        <View style={s.macros}>
          <MacroWheel
            title="Fats"
            consumed={consumed.fatGrams}
            budget={budgets.fatGrams}
            colors={[g.color.yellow, g.color.yellow_light, g.color.yellow_dark]}
          />
          <MacroWheel
            title="Carbs"
            consumed={consumed.carbGrams}
            budget={budgets.carbGrams}
            colors={[g.color.blue, g.color.blue_light]}
          />
          <MacroWheel
            title="Protein"
            consumed={consumed.proteinGrams}
            budget={budgets.proteinGrams}
            colors={[g.color.pink, g.color.pink_light]}
          />
        </View>
      </LinearGradient>
    </Card>
  );
};

const s = StyleSheet.create({
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
  macros: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gradient: {
    padding: 15,
    borderRadius: 5,
  },
});

export default BudgetCard;
