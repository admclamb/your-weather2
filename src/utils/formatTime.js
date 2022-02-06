export function unixToHHMM(unix) {
  const date = new Date(unix * 1000);
  let hours = date.getHours();
  if (hours > 12) hours -= 12;
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  return hours + ":" + minutes;
}

// Add pm or am based on time
export function addMeridiem(unix) {
  const date = new Date(unix * 1000);
  let hours = date.getHours();
  if (hours > 12) return " PM";
  return " AM";
}
