export function validateLocationSearch(location) {
  const commaPosition = location.search(",");
  console.log(commaPosition);
  console.log(location);
  if (commaPosition !== -1) {
  } else {
    const spacePosition = location.search(" ");
    console.log(spacePosition, typeof spacePosition, location, typeof location);
    const locationWithComma = location.splice(spacePosition - 1, 0, ",");
    console.log(locationWithComma);
    if (spacePosition !== -1) {
    } else {
    }
  }
}
