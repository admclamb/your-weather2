export function unixToHHMM(unix) {
  const date = new Date(unix * 1000);
  let hours = date.getHours();
  if (hours > 12) hours -= 12;
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  return hours + ":" + minutes;
}

export function unixToHH(unix) {
  const date = new Date(unix * 1000);
  let hours = date.getHours();
  if (hours > 12) hours -= 12;
  return hours;
}

// Add pm or am based on time
export function addMeridiem(unix) {
  const date = new Date(unix * 1000);
  let hours = date.getHours();
  if (hours > 12) return " PM";
  return " AM";
}

export function getDay(unix) {
  return new Date(unix * 1000)
    .toLocaleString("en-US", { day: "numeric" })
    .toString()
    .padStart(2, "0");
}

export function getDayOfWeek(unix) {
  const date = new Date(unix * 1000);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[date.getDay()];
}
