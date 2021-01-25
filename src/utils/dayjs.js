import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import * as Localization from "expo-localization";

dayjs.extend(calendar);
dayjs.extend(utc);
dayjs.extend(timezone);

const deviceTimeZone = Localization.timezone;

export const toRelativeDate = (date) => {
  return dayjs(date).tz(deviceTimeZone).calendar(null, {
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd, MMM D",
    lastDay: "[Yesterday]",
    lastWeek: "dddd, MMM D",
    sameElse: "dddd, MMM D",
  });
};

export const formatTime = (time) => {
  return dayjs(time).format("h:mm A");
};

export default dayjs;
