import { Card } from "_components/common";
/* eslint-disable prettier/prettier */
import { ERROR, STARTED } from "_constants";
import { colors } from "_globalstyles";
import { toPrecision } from "_utils";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const NutritionDetailCard = ({ nutrients, fetchStatus, quantity }) => {

  return (
    <Card>
      {fetchStatus === STARTED ? (
        <ActivityIndicator size="large" color={colors.grey_8} />
      ) : fetchStatus === ERROR ? (
        <Text style={[s.heading, { textAlign: "center" }]}>Oops! Something went wrong :\</Text>
      ) : (
            <View>
              <Text style={s.heading}>Nutrition Information</Text>
              <Nutrient
                unit={"cal"}
                name={"Calories"}
                amount={toPrecision(nutrients.calories_kcal * quantity, 0)}
              />
              <Nutrient
                unit={"g"}
                name={"Fat"}
                amount={toPrecision(nutrients.fat_g * quantity, 1)}
              />
              <SubNutrient
                unit={"g"}
                name={"Saturated"}
                amount={toPrecision(nutrients.fatSat_g * quantity, 1)}
              />
              <SubNutrient
                unit={"g"}
                name={"Trans Fat"}
                amount={toPrecision(nutrients.fatTrans_g * quantity, 1)}
              />
              <SubNutrient
                unit={"g"}
                name={"Polyunsaturated Fat"}
                amount={toPrecision(nutrients.fatPoly_g * quantity, 1)}
              />
              <SubNutrient
                unit={"g"}
                name={"Monounsaturated Fat"}
                amount={toPrecision(nutrients.fatMono_g * quantity, 1)}
              />
              <Nutrient
                unit={"mg"}
                name={"Cholesterol"}
                amount={toPrecision(nutrients.cholesterol_mg * quantity, 1)}
              />
              <Nutrient
                unit={"mg"}
                name={"Sodium"}
                amount={toPrecision(nutrients.sodium_mg * quantity, 1)}
              />
              <Nutrient
                unit={"g"}
                name={"Carbohydrates"}
                amount={toPrecision(nutrients.carbs_g * quantity, 1)}
              />
              <SubNutrient
                unit={"g"}
                name={"Dietary Fiber"}
                amount={toPrecision(nutrients.fiber_g * quantity, 1)}
              />
              <SubNutrient
                unit={"g"}
                name={"Sugars"}
                amount={toPrecision(nutrients.sugar_g * quantity, 1)}
              />
              <Nutrient
                unit={"g"}
                name={"Protein"}
                amount={toPrecision(nutrients.protein_g * quantity, 1)}
              />
              <SubNutrient
                unit={"mg"}
                name={"Vitamin C"}
                amount={toPrecision(nutrients.vitaminC_mg * quantity, 1)}
              />
              <SubNutrient
                unit={"mg"}
                name={"Vitamin B6"}
                amount={toPrecision(nutrients.vitaminB6_mg * quantity, 1)}
              />
              <SubNutrient
                unit={"µg"}
                name={"Vitamin B12"}
                amount={toPrecision(nutrients.vitaminB12_ug * quantity, 1)}
              />
              <SubNutrient
                unit={"mg"}
                name={"Thiamin (B1)"}
                amount={toPrecision(nutrients.thiamin_mg * quantity, 1)}
              />
              <SubNutrient
                unit={"mg"}
                name={"Riboflavin (B2)"}
                amount={toPrecision(nutrients.riboflavin_mg * quantity, 1)}
              />
              <SubNutrient
                unit={"mg"}
                name={"Niacin (B3)"}
                amount={toPrecision(nutrients.niacin_mg * quantity, 1)}
              />
              <SubNutrient
                unit={"mg"}
                name={"Potassium"}
                amount={toPrecision(nutrients.potassium_mg * quantity, 1)}
              />
              <SubNutrient
                unit={"mg"}
                name={"Calcium"}
                amount={toPrecision(nutrients.calcium_mg * quantity, 1)}
              />
              <SubNutrient
                unit={"mg"}
                name={"Iron"}
                amount={toPrecision(nutrients.iron_mg * quantity, 1)}
              />
            </View>
          )}
    </Card>
  );
};

const Nutrient = ({ name, amount, unit }) => {
  return (
    <View style={s.row}>
      <View style={[s.col, { flex: 7 }]}>
        <Text style={s.bold}>{name}</Text>
      </View>
      <View style={[s.col, { flex: 2 }]}>
        <Text style={[s.bold, { textAlign: "right" }]}>{amount}</Text>
      </View>
      <View style={[s.col, { flex: 1 }]}>
        <Text style={[s.bold, { textAlign: "right" }]}>{unit}</Text>
      </View>
    </View>
  );
};

const SubNutrient = ({ name, amount, unit }) => {
  return (
    <View style={s.row}>
      <View style={[s.col, { flex: 7 }]}>
        <Text style={[s.regular, { marginLeft: 10 }]}>{name}</Text>
      </View>
      <View style={[s.col, { flex: 2 }]}>
        <Text style={[s.regular, { textAlign: "right" }]}>{amount}</Text>
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
    color: colors.grey_8,
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
    color: colors.grey_8,
    fontSize: 18,
    width: "100%",
  },
  regular: {
    fontFamily: "Lato_Regular",
    color: colors.grey_7,
    fontSize: 17,
    width: "100%",
  },
});

export default NutritionDetailCard;
