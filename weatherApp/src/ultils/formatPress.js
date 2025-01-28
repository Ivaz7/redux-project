export const formatPress = (value, units) => {
  if (units === "metric") {
    return value + " hPa";
  } else {
    return (value * 0.02953).toFixed(2) + " inHg";
  }
}