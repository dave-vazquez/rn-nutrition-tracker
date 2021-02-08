import { Colors, Layout, Typography } from "_global_styles";
import { StyleSheet } from "react-native";

/********************************************************
 *                     VARIANTS                         *
 ********************************************************/
const base = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    justifyContent: "space-between",
  },
  label: {
    color: Colors.blue.s2,
    fontSize: Typography.size.xs,
    fontFamily: Typography.font.lato.regular,
  },
  input: {
    flex: 1,
    color: Colors.grey.s8,
    fontSize: Typography.size.xs,
    paddingVertical: Layout.spacing.xs,
    fontFamily: Typography.font.lato.regular,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue.s2,
  },
  leftIconContainer: {
    width: 25,
    alignItems: "flex-start",
  },
  rightIconContainer: {
    width: 25,
    alignItems: "flex-end",
  },
  error: {
    fontFamily: Typography.font.lato.regular,
    fontSize: Typography.size.xs,
    color: Colors.warning.s1,
    marginVertical: Layout.spacing.sm,
  },
});

const large = StyleSheet.create({
  ...base,
  container: {
    ...base.container,
    marginBottom: Layout.spacing.sm,
  },
  label: {
    ...base.label,
    color: Colors.grey.s8,
    fontSize: Typography.size.sm,
  },
  input: {
    ...base.input,
    fontSize: Typography.size.sm,
    paddingVertical: Layout.spacing.sm,
  },
});

const variants = {
  base,
  large,
};

/********************************************************
 *                           TYPES                      *
 ********************************************************/
const selection = {
  base: StyleSheet.create({
    ...base,
    mockInput: {
      ...base.input,
      paddingVertical: Layout.spacing.sm,
      borderBottomWidth: 0,
    },
    icon: {
      color: Colors.blue.s2,
    },
    touchable: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }),
  large: StyleSheet.create({
    ...large,
    mockInput: {
      ...large.input,
      paddingVertical: Layout.spacing.sm,
      borderBottomWidth: 0,
    },
    icon: {
      color: Colors.blue.s2,
    },
    touchable: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }),
};

const types = {
  selection,
};

export const inputStyles = {
  types,
  variants,
};
