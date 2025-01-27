export const formatTemp = (num, units) => {
  if (units === "metric") {
    return `${num}°C`
  } else {
    return `${((num * (9 / 5)) + 32).toFixed(2)}°F`;
  }
}