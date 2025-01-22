import { useGetWeatherQuery } from "../../service/redux/API/weatherAPI";

export const useGetWeather = (lat, lon) => {
  const { data, isLoading, isError, error } = useGetWeatherQuery({ lat: lat, lon: lon });

  if (data) {
    return [
      ["country", data?.sys?.country],
      ["city", data?.name],
      ["weather", data?.weather?.[0]?.main],
      ["description", data?.weather?.[0]?.description], 
      ["icon", data?.weather?.[0]?.icon],
      ["temp", [
        ["tempAvg", data?.main?.temp],
        ["tempMin", data?.main?.temp_min],
        ["tempMax", data?.main?.temp_max],
      ]],
    ];
  }

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return error
  }
} 