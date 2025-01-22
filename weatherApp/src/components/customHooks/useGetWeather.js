import { useGetWeatherQuery } from "../../service/redux/API/weatherAPI";

export const useGetWeather = (lat, lon) => {
  const { data, isLoading, isError, error } = useGetWeatherQuery({ lat: lat, lon: lon });

  if (data) {
    return [
      ["Country", data?.sys?.country],
      ["City", data?.name],
      ["Weather", data?.weather?.[0]?.main],
      ["Description", data?.weather?.[0]?.description], 
      ["icon", data?.weather?.[0]?.icon],
      ["temp", [
        ["tempAvg", data?.main?.temp],
        ["tempMin", data?.main?.temp_min],
        ["tempMax", data?.main?.temp_max],
      ]],
      ["Humidity", data?.main?.humidity],
      ["Wind speed", data?.wind?.speed],
      ["Wind Direction", data?.wind?.deg],
      ["Time", data?.timezone]
    ];
  }

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return error
  }
} 