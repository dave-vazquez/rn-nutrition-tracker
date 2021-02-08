import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import * as Localization from "expo-localization";

dayjs.extend(calendar);
dayjs.extend(utc);
dayjs.extend(timezone);

export const deviceTimeZone = Localization.timezone;

export const maxRegistrationDOB = dayjs(new Date())
  .subtract(13, "year")
  .toDate();

export const minRegistrationDOB = dayjs(new Date())
  .subtract(110, "year")
  .toDate();

export const getRelativeDate = (date) => {
  return dayjs(date).tz(deviceTimeZone).calendar(null, {
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd, MMM D",
    lastDay: "[Yesterday]",
    lastWeek: "dddd, MMM D",
    sameElse: "dddd, MMM D",
  });
};

export const getFormattedTime = (time) => {
  return dayjs(time).format("h:mm A");
};

export const formatDate = (date) => {
  return dayjs(date).format("MMM D, YYYY");
};

export const getFormattedDateTime = (value, type) => {
  if (type === "relative-date") return getRelativeDate(value);
  if (type === "12-hour") return getFormattedTime(value);
  return formatDate(value);
};

export default dayjs;
