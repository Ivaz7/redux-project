import { useGetWeatherQuery } from "../service/redux/API/weatherAPI";
import TodayWeather from "./today_weather/todayWeather";
import { changeDataWeather } from "../service/redux/slice/weatherDataSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setWeather } from "./function/setWeather";
import { Bars } from "react-loader-spinner";

const MainEl = () => {
  const { data, isLoading, IsError, error } = useGetWeatherQuery({ q:"bandung"})
  const dispatch = useDispatch();
  const normalizeData = setWeather(data);

  useEffect(() => {
    dispatch(changeDataWeather(normalizeData));
  }, [data, dispatch, normalizeData])
  
  if (isLoading) {
    return (
      <div className="loadingError d-flex justify-content-center align-items-center">
        <Bars color="#116466" />
      </div>
    )
  }
  
  if (IsError) {
    return (
      <div className="loadingError d-flex justify-content-center align-items-center">
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