import { Card } from "_components/common";
import { Colors } from "_global_styles";
import { toPrecision } from "_utils";
import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const NutritionSummaryCard = ({ image, fetchStatus, nutrients }) => {
  return (
    <Card>
      <View style={s.container}>
        <FoodImage image={image} />
        <Summary
          fat={toPrecision(nutrients.fat_g, 0)}
          carbs={toPrecision(nutrients.carbs_g, 0)}
          protein={toPrecision(nutrients.protein_g, 0)}
          calories={toPrecision(nutrients.calories_kcal, 0)}
          loading={fetchStatus === "started"}
        />
      </View>
    </Card>
  );
};

const FoodImage = ({ image }) => {
  return (
    <View style={s.imageContainer}>
      <Image
        style={s.image}
        source={
          image
            ? { uri: image }
            : require("_assets/images/food_image_placeholder.png")
        }
      />
    </View>
  );
};

const Summary = ({ loading, calories, fat, carbs, protein }) => {
  return (
    <View style={s.summary}>
      <Nutrient
        unit="cal"
        name="Calories"
        amount={calories}
        loading={loading}
        plateColor={Colors.green.light.s4}
      />
      <Nutrient
        unit="g"
        name="Fats"
        amount={fat}
        loading={loading}
        plateColor={Colors.yellow.s2}
      />
      <Nutrient
        unit="g"
        name="Carbs"
        amount={carbs}
        loading={loading}
        plateColor={Colors.blue.s2}
      />
      <Nutrient
        unit="g"
        name="Protein"
        amount={protein}
        loading={loading}
        plateColor={Colors.pink.s2}
      />
    </View>
  );
};

const Nutrient = ({ name, amount, unit, plateColor, loading }) => {
  const plateTextColor =
    name === "Calories" || name === "Fats" ? Colors.grey.s8 : Colors.white;

  return (
    <View style={s.nutrient}>
      <View style={s.amount}>
        <View style={[s.namePlate, { backgroundColor: plateColor }]}>
          <Text style={[s.plateText, { color: plateTextColor }]}>{name}</Text>
        </View>
        <Amount loading={loading} amount={amount} />
      </View>
      <Text style={[s.text, s.unit]}>{unit}</Text>
    </View>
  );
};

const Amount = ({ loading, amount }) => {
  if (loading) return <ActivityIndicator size="small" color={Colors.grey.s8} />;

  return <Text style={s.text}>{amount}</Text>;
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.8,
    elevation: 3,
    shadowRadius: 1,
    borderRadius: 5,
    shadowOpacity: 2,
    marginRight: 15,
    shadowColor: "#00000030",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  summary: {
    flex: 1.2,
    height: 135,
    justifyContent: "space-between",
  },
  nutrient: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  namePlate: {
    height: 25,
    width: 100,
    elevation: 3,
    shadowRadius: 1,
    borderRadius: 5,
    shadowOpacity: 2,
    justifyContent: "center",
    shadowColor: "#00000030",
    shadowOffset: { width: 0, height: 2 },
  },
  amount: {
    flex: 1.7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  unit: {
    flex: 0.3,
    textAlign: "right",
  },
  text: {
    fontSize: 17,
    fontFamily: "Lato_Bold",
    color: Colors.grey.s8,
  },
  plateText: {
    fontSize: 17,
    fontFamily: "Lato_Regular",
    textAlign: "center",
  },
});

export default NutritionSummaryCard;
