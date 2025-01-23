export const formatWindDirection = (num) => {
  if (num === 0) {
    return "North"
  }

  if (num === 90) {
    return "East"
  }

  if (num === 180) {
    return "South"
  }

  if (num === 270) {
    return "West"
  }

  if (num > 0 && num < 90) {
    return "North East"
  }

  if (num > 90 && num < 180) {
    return "South East"
  }

  if (num > 180 && num < 270) {
    return "South West"
  }

  if (num > 270 && num < 360) {
    return "North West"
  }
}