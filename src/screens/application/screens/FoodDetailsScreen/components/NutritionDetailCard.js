/* eslint-disable prettier/prettier */
import { Card } from "_components/common";
import { Colors } from "_global_styles";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const NutritionDetailCard = ({ nutrients, fetchStatus }) => {

  return (
    <Card>
      {fetchStatus === 'started' ? (
        <ActivityIndicator size="large" color={Colors.grey.s8} />
      ) : fetchStatus === "error" ? (
        <Text style={[s.heading, { textAlign: "center" }]}>Oops! Something went wrong :\</Text>
      ) : (
            <View>
              <Text style={s.heading}>Nutrition Information</Text>
              <Nutrient
                unit={"cal"}
                name={"Calories"}
                amount={nutrients.calories_kcal}
              />
              <Nutrient
                unit={"g"}
                name={"Fat"}
                amount={nutrients.fat_g}
              />
              <SubNutrient
                unit={"g"}
                name={"Saturated"}
                amount={nutrients.fatSat_g}
              />
              <SubNutrient
                unit={"g"}
                name={"Trans Fat"}
                amount={nutrients.fatTrans_g}
              />
              <SubNutrient
                unit={"g"}
                name={"Polyunsaturated Fat"}
                amount={nutrients.fatPoly_g}
              />
              <SubNutrient
                unit={"g"}
                name={"Monounsaturated Fat"}
                amount={nutrients.fatMono_g}
              />
              <Nutrient
                unit={"mg"}
                name={"Cholesterol"}
                amount={nutrients.cholesterol_mg}
              />
              <Nutrient
                unit={"mg"}
                name={"Sodium"}
                amount={nutrients.sodium_mg}
              />
              <Nutrient
                unit={"g"}
                name={"Carbohydrates"}
                amount={nutrients.carbs_g}
              />
              <SubNutrient
                unit={"g"}
                name={"Dietary Fiber"}
                amount={nutrients.fiber_g}
              />
              <SubNutrient
                unit={"g"}
                name={"Sugars"}
                amount={nutrients.sugar_g}
              />
              <Nutrient
                unit={"g"}
                name={"Protein"}
                amount={nutrients.protein_g}
              />
              <SubNutrient
                unit={"mg"}
                name={"Vitamin C"}
                amount={nutrients.vitaminC_mg}
              />
              <SubNutrient
                unit={"mg"}
                name={"Vitamin B6"}
                amount={nutrients.vitaminB6_mg}
              />
              <SubNutrient
                unit={"µg"}
                name={"Vitamin B12"}
                amount={nutrients.vitaminB12_ug}
              />
              <SubNutrient
                unit={"mg"}
                name={"Thiamin (B1)"}
                amount={nutrients.thiamin_mg}
              />
              <SubNutrient
                unit={"mg"}
                name={"Riboflavin (B2)"}
                amount={nutrients.riboflavin_mg}
              />
              <SubNutrient
                unit={"mg"}
                name={"Niacin (B3)"}
                amount={nutrients.niacin_mg}
              />
              <SubNutrient
                unit={"mg"}
                name={"Potassium"}
                amount={nutrients.potassium_mg}
              />
              <SubNutrient
                unit={"mg"}
                name={"Calcium"}
                amount={nutrients.calcium_mg}
              />
              <SubNutrient
                unit={"mg"}
                name={"Iron"}
                amount={nutrients.iron_mg}
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
    color: Colors.grey.s8,
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
    color: Colors.grey.s8,
    fontSize: 18,
    width: "100%",
  },
  regular: {
    fontFamily: "Lato_Regular",
    color: Colors.grey.s8,
    fontSize: 17,
    width: "100%",
  },
});

export default NutritionDetailCard;
