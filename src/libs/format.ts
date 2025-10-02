import { FormatOptions } from "../types/options.js";
import { days, months } from "../utils/constants.js";

/**
 * Formats a date into Sinhala representation
 * @param date - The date to format
 * @param options - Optional formatting options
 * @returns Formatted Sinhala date string
 */
export function formatSinhalaDate(date: Date, options?: FormatOptions): string {
  // Validate date
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return "වලංගු නොවන දිනයකි";
  }

  // Validate array bounds
  const dayIndex = date.getDay();
  const monthIndex = date.getMonth();

  if (
    dayIndex < 0 ||
    dayIndex >= days.length ||
    monthIndex < 0 ||
    monthIndex >= months.length
  ) {
    return "වලංගු නොවන දිනයකි";
  }

  const dayName = days[dayIndex];
  const day = date.getDate().toString().padStart(2, "0");
  const monthName = months[monthIndex];
  const year = date.getFullYear();

  let formatted = `${dayName}, ${day} ${monthName} ${year}`;

  if (options?.showTime) {
    formatted += ` ${formatTime(date)}`;
  }

  return formatted;
}

/**
 * Formats time component in 12-hour format with Sinhala meridiem
 * @param date - The date object containing time
 * @returns Formatted time string
 */
function formatTime(date: Date): string {
  const hours24 = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds();

  const isAM = hours24 < 12;
  const meridiem = isAM ? "පෙ.ව." : "ප.ව.";

  // Convert to 12-hour format
  const hours12 = hours24 % 12 || 12;

  let timeStr = `${hours12}:${minutes}`;

  // Optionally include seconds if not zero
  if (seconds > 0) {
    timeStr += `:${seconds.toString().padStart(2, "0")}`;
  }

  return `${timeStr} ${meridiem}`;
}
