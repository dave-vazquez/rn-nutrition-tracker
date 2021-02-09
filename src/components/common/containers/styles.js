import { Colors } from "_global_styles";
import { StyleSheet } from "react-native";

const baseStyles = StyleSheet.create({
  card: {
    padding: 15,
    elevation: 4,
    borderRadius: 5,
    marginBottom: 15,
    shadowOpacity: 2,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Colors.white,
    shadowOffset: { width: 0, height: 2 },
  },
});

const CardStyles = {
  baseStyles,
};

export default CardStyles;