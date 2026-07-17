import { addYear, diffYears,diffDays, format } from "@formkit/tempo";

export function getTempoElapsedTime(targetDate: Date | string): string {
  const start = new Date(targetDate);
  const now = new Date();

  // 1. Current Time (e.g., "10:24:01")
  const currentTime = format(now, "hh:mm:ss");

  // 2. Exact Years
  const years = diffYears(now, start);

  // 3. Remainder calculation
  // Step forward by the exact number of years to account for leap years natively
  const afterYears = new Date(start);
  afterYears.setFullYear(afterYears.getFullYear() + years);

  // Calculate remaining time in milliseconds
  const msRemaining = Math.max(0, now.getTime() - afterYears.getTime());

  const days = Math.floor(msRemaining / (1000 * 60 * 60 * 24));
  const remainderAfterDays = msRemaining % (1000 * 60 * 60 * 24);

  const hours = Math.floor(remainderAfterDays / (1000 * 60 * 60));
  const minutes = Math.floor(
    (remainderAfterDays % (1000 * 60 * 60)) / (1000 * 60),
  );

  // 4. Construct the comma-separated parts
  const uptimeParts = [];
  if (years > 0) uptimeParts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (days > 0) uptimeParts.push(`${days} ${days === 1 ? "day" : "days"}`);

  // Hours and minutes always show as HH:mm or H:mm
  uptimeParts.push(`${hours}:${minutes.toString().padStart(2, "0")}`);

  return `${currentTime} up ${uptimeParts.join(", ")}`;
}

export function getYearsAndDaysElapsed(startDate: Date | string , endDate?: Date | string): string {
  const start = new Date(startDate);
  const now = endDate ? new Date(endDate) :  new Date();

  // 1. Get exact full years
  const years = diffYears(now, start);

  // 2. Advance the start date forward by the exact number of years
  const dateAfterYears = addYear(start, years);

  // 3. Calculate the remaining days
  const days = diffDays(now, dateAfterYears);

  // 4. Construct the string
  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  
  // Always push days, even if 0 (e.g., "4 years, 0 days,")
  parts.push(`${days} ${days === 1 ? 'day' : 'days'}`);

  return `${parts.join(',')}`;
}
