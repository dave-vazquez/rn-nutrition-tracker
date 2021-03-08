import { isValidDate } from "_utils";
import { isAfter, isBefore } from "date-fns";

const onboardingRules = {
  heightFt: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 2,
      message: "Min value 2'",
    },
    max: {
      value: 9,
      message: "Max value 9'",
    },
  },
  heightIn: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 0,
      message: 'Min. value 0"',
    },
    max: {
      value: 11,
      message: 'Max value 11"',
    },
  },
  weightLbs: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 66,
      message: "Weight should be at least 66 lbs",
    },
    max: {
      value: 1399,
      message: "This weight is not supported",
    },
  },
  targetWeightLbs: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 65,
      message: "Target weight should be greater than 64 lbs",
    },
    max: {
      value: 1395,
      message: "Target weight should be less than 1395 lbs",
    },
  },
};

export default onboardingRules;
