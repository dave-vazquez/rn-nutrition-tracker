import { Colors, Layout, Typography, composeStyles } from "_global_styles";

const baseStyles = {
  label: {
    fontFamily: Typography.font.lato.regular,
  },
  input: {
    color: Colors.grey.s8,
    fontFamily: Typography.font.lato.regular,
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
    textAlign: "center",
    fontFamily: Typography.font.lato.regular,
    fontSize: Typography.size.xs,
    color: Colors.warning.s1,
    marginVertical: Layout.spacing.sm,
  },
};

/********************************************************
 *                         TYPES                        *
 ********************************************************/
const text = (styles) => ({
  ...styles,
  input: {
    ...styles.input,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue.s2,
  },
});

const selection = (styles) => ({
  ...styles,
  container: {
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue.s2,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: Colors.blue.s2,
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Layout.spacing.xs,
  },
});

const spinner = (styles) => ({
  ...styles,
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue.s2,
  },
  spinner: {
    marginTop: 5,
    marginBottom: 5,
  },
});

/********************************************************
 *                         SIZES                        *
 ********************************************************/
const small = (styles) => ({
  ...styles,
  container: {
    ...styles.container,
    flex: 1,
    margin: 8,
  },
  label: {
    ...styles.label,
    color: Colors.blue.s2,
    fontSize: Typography.size.xs,
  },
  input: {
    ...styles.input,
    fontSize: Typography.size.xs,
    paddingVertical: Layout.spacing.xs,
  },
});

const large = (styles) => ({
  ...styles,
  container: {
    ...styles.container,
    flex: 0,
    margin: Layout.spacing.sm,
  },
  label: {
    ...styles.label,
    color: Colors.grey.s8,
    fontSize: Typography.size.sm,
  },
  input: {
    ...styles.input,
    fontSize: Typography.size.sm,
    paddingVertical: Layout.spacing.sm,
  },
});

const InputStyles = {
  text: {
    small: composeStyles(baseStyles, { type: text, size: small }),
    large: composeStyles(baseStyles, { type: text, size: large }),
  },
  selection: {
    small: composeStyles(baseStyles, { type: selection, size: small }),
    large: composeStyles(baseStyles, { type: selection, size: large }),
  },
  spinner: {
    small: composeStyles(baseStyles, { type: spinner, size: small }),
    large: composeStyles(baseStyles, { type: spinner, size: large }),
  },
};

export default InputStyles;
