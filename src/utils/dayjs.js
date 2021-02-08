import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import * as Localization from "expo-localization";

dayjs.extend(calendar);
dayjs.extend(utc);
dayjs.extend(timezone);

export const deviceTimeZone = Localization.timezone;

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

export const getFormattedDateTime = (value, type) => {
  if (type === "date") return getRelativeDate(value);
  if (type === "time") return getFormattedTime(value);
  return value;
};

export default dayjs;
