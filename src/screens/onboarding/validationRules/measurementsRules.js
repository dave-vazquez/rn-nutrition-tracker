import { isValidDate } from "_utils";
import { isAfter, isBefore } from "date-fns";

const DATE_MAX = new Date().setFullYear(new Date().getFullYear() - 13);
const DATE_MIN = new Date().setFullYear(new Date().getFullYear() - 100);

const measurementRules = {
  heightFt: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 2,
      message: "Are you sure? The world record is 1'11\"",
    },
    max: {
      value: 9,
      message: "Are you sure? The world record is 8'11\"",
    },
  },
  heightIn: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 0,
      message: "Inches should be at least 0",
    },
    max: {
      value: 11,
      message: "Inches should be less than 12",
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
  dateOfBirth: {
    required: {
      value: true,
      message: "Required field",
    },
    validate: {
      isValid: (dateOfBirth) =>
        isValidDate(dateOfBirth) ? true : "Invalid Date",
      min: (dateOfBirth) =>
        isAfter(new Date(dateOfBirth), DATE_MIN)
          ? true
          : "This age is not supported",
      max: (dateOfBirth) =>
        isBefore(new Date(dateOfBirth), DATE_MAX)
          ? true
          : "Must be at least 13 years old",
    },
  },
};

export default measurementRules;
