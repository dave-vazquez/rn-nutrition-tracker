import { Colors, Layout, Typography } from "_global_styles";
import { StyleSheet } from "react-native";

const SelectionModalStyles = {
  modal: StyleSheet.create({
    overlay: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00000050",
    },
    list: {
      flexGrow: 1,
      backgroundColor: Colors.white,
      borderRadius: 5,
      paddingHorizontal: Layout.spacing.sm,
    },
  }),
  item: StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 1,
      justifyContent: "space-between",
      borderBottomColor: Colors.blue.s2,
      paddingVertical: Layout.spacing.md,
    },
    label: {
      color: Colors.grey.s9,
      fontSize: Typography.size.xs,
      fontFamily: Typography.font.lato.regular,
    },
    labelSelected: {
      color: Colors.blue.s2,
      fontSize: Typography.size.xs,
      fontFamily: Typography.font.lato.bold,
    },
    icon: {
      marginBottom: 3,
      color: Colors.transparent,
    },
    iconSelected: {
      marginBottom: 3,
      color: Colors.blue.s2,
    },
  }),
};

export default SelectionModalStyles;
