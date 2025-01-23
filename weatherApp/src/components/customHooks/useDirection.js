export const useDirection = (num) => {
  if (num === 0) {
    return { direction: "fa-arrow-up", rotate: 0 }; // North
  }

  if (num === 90) {
    return { direction: "fa-arrow-right", rotate: 0 }; // East
  }

  if (num === 180) {
    return { direction: "fa-arrow-down", rotate: 0 }; // South
  }

  if (num === 270) {
    return { direction: "fa-arrow-left", rotate: 0 }; // West
  }

  if (num > 0 && num < 90) {
    return { direction: "fa-arrow-up", rotate: num }; // North East
  }

  if (num > 90 && num < 180) {
    return { direction: "fa-arrow-up", rotate: num }; // South East
  }

  if (num > 180 && num < 270) {
    return { direction: "fa-arrow-up", rotate: num }; // South West
  }

  if (num > 270 && num < 360) {
    return { direction: "fa-arrow-up", rotate: num }; // North West
  }
}
