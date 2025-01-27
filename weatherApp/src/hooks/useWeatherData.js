import { useSelector } from "react-redux"

export const useWeatherData = () => {
  const data = useSelector((State) => State.weatherDataSlice.data);
  const hour = useSelector((State) => State.weatherChoiceSlice.hour);
  const day = useSelector((State) => State.weatherChoiceSlice.day);

  return { data, hour, day }
}