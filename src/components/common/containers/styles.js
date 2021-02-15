import { Colors, Layout } from "_global_styles";
import { StyleSheet } from "react-native";

const CardStyles = StyleSheet.create({
  card: {
    padding: Layout.spacing.md,
    elevation: 4,
    borderRadius: 5,
    marginBottom: Layout.spacing.md,
    marginHorizontal: Layout.spacing.md,
    shadowOpacity: 2,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Colors.white,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default CardStyles;
