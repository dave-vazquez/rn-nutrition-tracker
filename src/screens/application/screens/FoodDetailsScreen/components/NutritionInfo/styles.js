import { Colors, Layout, Typography } from "_global_styles";
import { StyleSheet } from "react-native";

const NutritionInfoStyles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: Typography.size.md,
    fontFamily: Typography.font.lato.bold,
    color: Colors.grey.s8,
    marginBottom: Layout.spacing.md,
  },
  table_row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Layout.spacing.xs,
  },
  bold: {
    fontFamily: Typography.font.lato.bold,
    color: Colors.grey.s8,
    fontSize: Typography.size.sm,
    width: "100%",
    textAlign: "right",
  },
  regular: {
    fontFamily: Typography.font.lato.regular,
    color: Colors.grey.s8,
    fontSize: 17,
    width: "100%",
    textAlign: "right",
  },
  macro_cell: {
    height: 25,
    elevation: 1,
    width: "100%",
    shadowRadius: 1,
    borderRadius: 5,
    shadowOpacity: 2,
    justifyContent: "center",
    shadowColor: "#00000030",
    shadowOffset: { width: 0, height: 2 },
  },
});

export default NutritionInfoStyles;
