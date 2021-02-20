import { toPrecision } from "_utils";

const useCalculateAdded = (quantity, nutrients, macros) => {
  return {
    macros: {
      fat_g: toPrecision((macros.fat_g || 0) * +quantity, 0),
      carbs_g: toPrecision((macros.carbs_g || 0) * +quantity, 0),
      protein_g: toPrecision((macros.protein_g || 0) * +quantity, 0),
      calories_kcal: toPrecision((macros.calories_kcal || 0) * +quantity, 0),
    },
    all: {
      fat_g: toPrecision((macros.fat_g || 0) * +quantity, 1),
      carbs_g: toPrecision((macros.carbs_g || 0) * +quantity, 1),
      protein_g: toPrecision((macros.protein_g || 0) * +quantity, 1),
      calories_kcal: toPrecision((macros.calories_kcal || 0) * +quantity, 0),
      iron_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      sodium_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      fiber_g: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      sugar_g: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      niacin_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      calcium_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      fatSat_g: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      fatPoly_g: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      fatMono_g: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      potassium_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      thiamin_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      fatTrans_g: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      vitaminC_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      riboflavin_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      vitaminB6_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      vitaminB12_ug: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
      cholesterol_mg: toPrecision((nutrients.fat_g || 0) * +quantity, 1),
    },
  };
};

export default useCalculateAdded;
