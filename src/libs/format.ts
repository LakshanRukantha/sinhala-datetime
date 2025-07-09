import { FormatOptions } from "../types/options";
import { days, months } from "../utils/constants";

export function formatSinhalaDate(date: Date, options?: FormatOptions): string {
  const dayName = days[date.getDay()];
  const day = date.getDate();
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
