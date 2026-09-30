/** Parse dates like "Aug 2025", "Sept 2022", or "Present". */
const MONTHS: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

function parseMonthYear(raw: string, now = new Date()): Date | null {
  const text = raw.trim().toLowerCase();
  if (text === "present" || text === "now" || text === "current") {
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }
  const match = text.match(/^([a-z]+)\s+(\d{4})$/);
  if (!match) return null;
  const month = MONTHS[match[1]];
  if (month === undefined) return null;
  return new Date(Number(match[2]), month, 1);
}

/** Inclusive month span from start to end, e.g. "1 year 2 months". */
export function formatDuration(start: string, end: string, now = new Date()): string {
  const from = parseMonthYear(start, now);
  const to = parseMonthYear(end, now);
  if (!from || !to) return "";

  let months =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth()) +
    1;
  months = Math.max(1, months);

  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (years === 0) return rem === 1 ? "1 month" : `${rem} months`;
  if (rem === 0) return years === 1 ? "1 year" : `${years} years`;
  const yearPart = years === 1 ? "1 year" : `${years} years`;
  const monthPart = rem === 1 ? "1 month" : `${rem} months`;
  return `${yearPart} ${monthPart}`;
}

export function formatPeriod(start: string, end: string, now = new Date()): string {
  const duration = formatDuration(start, end, now);
  if (!duration) return `${start} to ${end}`;
  return `${start} to ${end}, ${duration}`;
}
