import { format, isDate, parse } from "date-fns";
import * as yup from "yup";

const DATE_MAX = new Date().setFullYear(new Date().getFullYear() - 13);
const DATE_MIN = new Date().setFullYear(new Date().getFullYear() - 100);

const measurementsSchema = yup.object().shape({
  heightFt: yup
    .number()
    .transform((value) => (value ? Number(value) : undefined))
    .required("Height is required")
    .min(2, "Are you sure? The world record is 1'11\"")
    .max(9, "Are you sure? The world record is 8'11\""),
  heightIn: yup
    .number()
    .transform((value) => (value ? Number(value) : undefined))
    .required("Height is required")
    .min(0, "Inches should be at least 0")
    .max(11, "Inches should be less than 12"),
  weightLbs: yup
    .number()
    .transform((value) => (value ? Number(value) : undefined))
    .required("Weight is required")
    .min(66, "Weight should be at least 66 lbs")
    .max(1399, "This weight is not supported"),
  dateOfBirth: yup
    .date()
    .transform(parseDateString)
    .typeError("Invalid Date")
    .min(format(DATE_MIN, "MM/dd/yyyy"), "This age is not supported")
    .max(format(DATE_MAX, "MM/dd/yyyy"), "Must be at least 13 years old"),
});

function parseDateString(_, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "MM/dd/yyyy", new Date());

  return parsedDate;
}

export default measurementsSchema;
