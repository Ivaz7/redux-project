export const formatSpeedWind = (num, units) => {
  if (units === "metric") {
    return (num * 3.6).toFixed(1) + " km/h";
  }

  if (units === "imperial") {
    return (num * 2.23694).toFixed(1) + " mph";
  }
}