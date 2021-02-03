import { StyleSheet } from "react-native";

export const colors = {
  green_light_1: "#EFF9DC",
  green_light_2: "#E0F3B9",
  green_light_3: "#C7E48D",
  green_light_4: "#9CBE57",
  green_light_5: "#71942A",
  green_1: "#D1EDD1",
  green_2: "#A6DBA6",
  green_3: "#79C379",
  green_4: "#4BA34B",
  green_5: "#247F24",
  red_1: "#FFE1E1",
  red_2: "#FFC2C2",
  red_3: "#F49797",
  red_4: "#CB5D5D",
  red_5: "#9F2D2D",
  pink_1: "#FFDCDC",
  pink_2: "#FFA1A1",
  pink_3: "#e59090",
  purple_1: "#EED2E1",
  purple_2: "#DBA7C4",
  purple_3: "#C479A3",
  purple_4: "#A34B7D",
  purple_5: "#7F2458",
  blue_1: "#DEE8FF",
  blue_2: "#859AD1",
  blue_3: "#778abc",
  blue_4: "#6a7ba7",
  yellow_1: "#FFFDD4",
  yellow_2: "#F4F097",
  yellow_3: "#DEDA81",
  yellow_4: "#b1ae67",
  wheat: "#FFEABC",
  white: "#FFFFFF",
  grey_1: "#FAFAFA",
  grey_2: "#F5F5F5",
  grey_3: "#EEEEEE",
  grey_4: "#E0E0E0",
  grey_5: "#BDBDBD",
  grey_6: "#9E9E9E",
  grey_7: "#757575",
  grey_8: "#616161",
  grey_9: "#212121",
  black: "#000000",
  warning_1: "#dc3545",
  warning_2: "#c62f3e",
};

export const padding = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30,
};

export const margin = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30,
};

export const fonts = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 30,
  xl: 58,
  primary: "NunitoSans_Regular",
  tertiary: {
    light: "Lato_Light",
    regular: "Lato_Regular",
    bold: "Lato_Bold",
    italic: "Lato_Italic",
  },
};

export const budget_palette = {
  cals: [colors.green_light_4, colors.green_light_5, colors.white],
  cals_exceeded: [colors.warning_1, colors.warning_2, colors.green_light_5],
  fats: [colors.yellow_2, colors.yellow_3, colors.yellow_1],
  carbs: [colors.blue_2, colors.blue_3, colors.blue_1],
  protein: [colors.pink_2, colors.pink_3, colors.pink_1],
};

export const nutrient_pallete = {
  fat: colors.yellow_2,
  carbs: colors.blue_2,
  protein: colors.pink_2,
  cals: colors.green_light_4,
};

const baseStyles = {
  heading: {
    textAlign: "center",
    color: colors.grey_8,
    marginBottom: padding.lg,
    fontFamily: fonts.primary,
    fontSize: fonts.lg,
  },
};

const createStyles = (overrides = {}) => {
  return StyleSheet.create({ ...baseStyles, ...overrides });
};

export default createStyles;
