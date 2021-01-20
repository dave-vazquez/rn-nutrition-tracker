/* eslint-disable prettier/prettier */
import { Card } from "_components/common";
import g from "_globalstyles";
import { toPrecision } from "_utils";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const NutritionInfoCard = ({ nutrients, fetchStatus }) => {
  return (
    <Card>
      {fetchStatus.start ? (
        <ActivityIndicator size="large" color={g.color.grey_8} />
      ) : (
          <View>
            <Text style={s.heading}>Nutrition Information</Text>
            <Nutrient
              name={"Calories"}
              quantity={toPrecision(nutrients.calories_kcal, 0)}
              unit={"cal"}
            />
            <Nutrient
              name={"Fat"}
              quantity={toPrecision(nutrients.fat_g, 1)}
              unit={"g"}
            />
            <SubNutrient
              name={"Saturated"}
              quantity={toPrecision(nutrients.fatSat_g, 1)}
              unit={"g"}
            />
            <SubNutrient
              name={"Trans Fat"}
              quantity={toPrecision(nutrients.fatTrans_g, 1)}
              unit={"g"}
            />
            <SubNutrient
              name={"Polyunsaturated Fat"}
              quantity={toPrecision(nutrients.fatPoly_g, 1)}
              unit={"g"}
            />
            <SubNutrient
              name={"Monounsaturated Fat"}
              quantity={toPrecision(nutrients.fatMono_g, 1)}
              unit={"g"}
            />
            <Nutrient
              name={"Cholesterol"}
              quantity={toPrecision(nutrients.cholesterol_mg, 1)}
              unit={"mg"}
            />
            <Nutrient
              name={"Sodium"}
              quantity={toPrecision(nutrients.sodium_mg, 1)}
              unit={"mg"}
            />
            <Nutrient
              name={"Carbohydrates"}
              quantity={toPrecision(nutrients.carbs_g, 1)}
              unit={"g"}
            />
            <SubNutrient
              name={"Dietary Fiber"}
              quantity={toPrecision(nutrients.fiber_g, 1)}
              unit={"g"}
            />
            <SubNutrient
              name={"Sugars"}
              quantity={toPrecision(nutrients.sugar_g, 1)}
              unit={"g"}
            />
            <Nutrient
              name={"Protein"}
              quantity={toPrecision(nutrients.protein_g, 1)}
              unit={"g"}
            />
            <SubNutrient
              name={"Vitamin C"}
              quantity={toPrecision(nutrients.vitaminC_mg, 1)}
              unit={"mg"}
            />
            <SubNutrient
              name={"Vitamin B6"}
              quantity={toPrecision(nutrients.vitaminB6_mg, 1)}
              unit={"mg"}
            />
            <SubNutrient
              name={"Vitamin B12"}
              quantity={toPrecision(nutrients.vitaminB12_ug, 1)}
              unit={"µg"}
            />
            <SubNutrient
              name={"Thiamin (B1)"}
              quantity={toPrecision(nutrients.thiamin_mg, 1)}
              unit={"mg"}
            />
            <SubNutrient
              name={"Riboflavin (B2)"}
              quantity={toPrecision(nutrients.riboflavin_mg, 1)}
              unit={"mg"}
            />
            <SubNutrient
              name={"Niacin (B3)"}
              quantity={toPrecision(nutrients.niacin_mg, 1)}
              unit={"mg"}
            />
            <SubNutrient
              name={"Potassium"}
              quantity={toPrecision(nutrients.potassium_mg, 1)}
              unit={"mg"}
            />
            <SubNutrient
              name={"Calcium"}
              quantity={toPrecision(nutrients.calcium_mg, 1)}
              unit={"mg"}
            />
            <SubNutrient
              name={"Iron"}
              quantity={toPrecision(nutrients.iron_mg, 1)}
              unit={"mg"}
            />
          </View>
        )}
    </Card>
  );
};

const Nutrient = ({ name, quantity, unit }) => {
  return (
    <View style={s.row}>
      <View style={[s.col, { flex: 7 }]}>
        <Text style={s.bold}>{name}</Text>
      </View>
      <View style={[s.col, { flex: 2 }]}>
        <Text style={[s.bold, { textAlign: "right" }]}>{quantity}</Text>
      </View>
      <View style={[s.col, { flex: 1 }]}>
        <Text style={[s.bold, { textAlign: "right" }]}>{unit}</Text>
      </View>
    </View>
  );
};

const SubNutrient = ({ name, quantity, unit }) => {
  return (
    <View style={s.row}>
      <View style={[s.col, { flex: 7 }]}>
        <Text style={[s.regular, { marginLeft: 10 }]}>{name}</Text>
      </View>
      <View style={[s.col, { flex: 2 }]}>
        <Text style={[s.regular, { textAlign: "right" }]}>{quantity}</Text>
      </View>
      <View style={[s.col, { flex: 1 }]}>
        <Text style={[s.regular, { textAlign: "right" }]}>{unit}</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "Lato_Bold",
    color: g.color.grey_8,
    marginBottom: 10,
  },
  row: {
    flex: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  col: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bold: {
    fontFamily: "Lato_Bold",
    color: g.color.grey_8,
    fontSize: 18,
    width: "100%",
  },
  regular: {
    fontFamily: "Lato_Regular",
    color: g.color.grey_7,
    fontSize: 17,
    width: "100%",
  },
});

export default NutritionInfoCard;
