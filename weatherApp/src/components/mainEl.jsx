import { useGetWeatherQuery } from "../service/redux/API/weatherAPI";
import TodayWeather from "./today_weather/todayWeather";
import { changeDataWeather } from "../service/redux/slice/weatherDataSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useWeather } from "./customHooks/useWeather";

const MainEl = () => {
  const { data, isLoading, IsError, error } = useGetWeatherQuery({ q:"jakarta"})
  const dispatch = useDispatch();
  const normalizeData = useWeather(data);

  useEffect(() => {
    dispatch(changeDataWeather(normalizeData));
  }, [data, dispatch, normalizeData])
  
  if (isLoading) {
    return (
      <div>
        Loading ...
      </div>
    )
  }
  
  if (IsError) {
    return (
      <div>
        {error}
      </div>
    )
  }

  return (
    <main>
      <TodayWeather />
    </main>
  )
}

export default MainEl;