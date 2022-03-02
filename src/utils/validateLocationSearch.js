export function validateLocationSearch(location) {
  // String.prototype.search() returns the index of location or
  // if not in string return -1
  if (!location) return;
  const commaPosition = location.search(",");
  if (commaPosition === -1) {
    const spacePosition = location.search(" ");
    let locationCopy = location;
    const locationWithComma =
      locationCopy.slice(0, spacePosition) +
      "," +
      locationCopy.slice(spacePosition + 1);
    return locationWithComma;
  }
}
