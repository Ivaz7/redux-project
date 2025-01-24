export const formatSpeedWind = (num, type) => {
  if (type === "kilo") {
    return (num * 3.6).toFixed(1) + " km/h";
  }

  if (type === "mile") {
    return (num * 2.23694).toFixed(1) + " mph";
  }
}