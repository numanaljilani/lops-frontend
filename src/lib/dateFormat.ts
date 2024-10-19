export function formatDate(timestamp: string): string {
  if (timestamp) {
    const date = new Date(timestamp);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // To use 12-hour format with AM/PM
      timeZone: "UTC", // To display in UTC (can be changed to other time zones)
    };

    return date.toLocaleString("en-US", options);
  }
  return "No date found"
}
