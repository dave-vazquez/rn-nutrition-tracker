import { Colors } from "_global_styles";
import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
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
