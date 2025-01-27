export const formatDate = (str) => {
  const dateDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const inputDate = new Date(str);

  const dayName = dateDays[inputDate.getDay()];

  const hours = inputDate.getHours() % 12;
  const minutes = inputDate.getMinutes();
  const period = inputDate.getHours() < 12 ? "AM" : "PM";
  const time = `${padZero(hours)}:${padZero(minutes)} ${period}`;

  return `${dayName}, ${time}`
}

const padZero = (num) => {
  return String(num).padStart(2, "0");
}