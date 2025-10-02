import { formatSinhalaDate } from "../src/index.js";

describe("formatSinhalaDate", () => {
  it("should handle invalid date gracefully", () => {
    const invalidDate = new Date("invalid-date");
    const result = formatSinhalaDate(invalidDate);
    expect(result).toBe("වලංගු නොවන දිනයකි");
  });

  it("should format date correctly without time", () => {
    const date = new Date("2025-07-09T00:00:00");
    const result = formatSinhalaDate(date);
    expect(result).toBe("බදාදා, 09 ජූලි 2025");
  });

  it("should format date and time correctly with AM", () => {
    const date = new Date("2025-07-09T09:15:00");
    const result = formatSinhalaDate(date, { showTime: true });
    expect(result).toBe("බදාදා, 09 ජූලි 2025 9:15 පෙ.ව.");
  });

  it("should format date and time correctly with PM", () => {
    const date = new Date("2025-07-09T15:45:00");
    const result = formatSinhalaDate(date, { showTime: true });
    expect(result).toBe("බදාදා, 09 ජූලි 2025 3:45 ප.ව.");
  });

  it("should format midnight (00:00) as 12 AM", () => {
    const date = new Date("2025-07-09T00:00:00");
    const result = formatSinhalaDate(date, { showTime: true });
    expect(result).toBe("බදාදා, 09 ජූලි 2025 12:00 පෙ.ව.");
  });
});
