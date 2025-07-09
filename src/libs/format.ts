import { FormatOptions } from "../types/options.js";
import { days, months } from "../utils/constants.js";

export function formatSinhalaDate(date: Date, options?: FormatOptions): string {
  if (isNaN(date.getTime())) {
    return "වලංගු නොවන දිනයකි"; // Handle invalid date
  }

  const dayName = days[date.getDay()];
  // TODO: Add 0 prefix to dates (.padStart(2, "0"))
  const day = date.getDate().toString();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  let formatted = `${dayName}, ${day} ${monthName} ${year}`;

  if (options?.showTime) {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const isAM = hours < 12;
    const meridiem = isAM ? "පෙ.ව." : "ප.ව.";

    hours = hours % 12 || 12;

    formatted += ` ${hours}:${minutes} ${meridiem}`;
  }

  return formatted;
}
