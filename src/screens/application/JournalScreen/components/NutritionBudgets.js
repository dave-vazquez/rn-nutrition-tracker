import g from "_globalstyles";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";
import CalorieBar from "./CalorieBar";
import MacroWheel from "./MacroWheel";

const NutritionBudgets = ({
  budgets: {
    caloricBudgetCal,
    fatBudgetGrams,
    carbBudgetGrams,
    proteinBudgetGrams,
  },
  consumed: { calories, carbs, fats, protein },
}) => {
  const [width, setWidth] = useState(0);

  return (
    <Card containerStyle={s.card}>
      <LinearGradient
        style={s.gradient}
        end={{ x: 1, y: 0.5 }}
        start={{ x: 0, y: 0.5 }}
        locations={[0.5, 1]}
        colors={["#D3E9AB", "#DFE9CC"]}
      >
        <View
          onLayout={(e) => {
            setWidth(e.nativeEvent.layout.width);
          }}
        >
          <CalorieBar
            width={width}
            budget={caloricBudgetCal}
            consumed={calories.consumed}
          />
          <View style={s.macros}>
            <MacroWheel
              title="Fats"
              colors={[
                g.color.yellow,
                g.color.yellow_light,
                g.color.yellow_dark,
              ]}
              data={[fats.consumed, fatBudgetGrams]}
              width={width / 3}
              blackText
            />
            <MacroWheel
              title="Carbs"
              colors={[g.color.blue, g.color.blue_light, g.color.blue]}
              data={[carbs.consumed, carbBudgetGrams]}
              width={width / 3}
            />
            <MacroWheel
              title="Protein"
              colors={[g.color.pink, g.color.pink_light, g.color.pink]}
              data={[protein.consumed, proteinBudgetGrams]}
              width={width / 3}
            />
          </View>
        </View>
      </LinearGradient>
    </Card>
  );
};

const s = StyleSheet.create({
  card: {
    padding: 0,
    elevation: 3,
    borderWidth: 0,
    borderRadius: 5,
    shadowRadius: 1,
    marginBottom: 10,
    shadowOpacity: 2,
    shadowColor: "#00000030",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: g.color.white,
    // backgroundColor: g.color.light_green_2,
  },
  gradient: {
    padding: 15,
    borderRadius: 5,
  },
  macros: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default NutritionBudgets;
