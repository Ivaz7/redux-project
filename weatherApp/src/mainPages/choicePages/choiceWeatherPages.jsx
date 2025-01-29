import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLazyGetWeatherQuery } from "../../service/redux/API/weatherAPI";
import { setDataWeather } from "../../service/redux/slice/weatherDataSlice";
import { formatDataWeather } from "../../ultils/formatDataWeather";
import { setIsPosition } from "../../service/redux/slice/positionSlice";
import { useNavigate } from "react-router-dom";
import FormInputUser from "./formInputUser";
import FamousCity from "./famousCity";
import ButtonGetMyLocation from "./getMyLocation";

const ChoicePlacePages = () => {
  const position = useSelector((state) => state.positionSlice);
  const { latitude, longitude, city } = position;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [triggerGetWeather, { data, isLoading, isError, reset }] = useLazyGetWeatherQuery();

  const changePlace = (e) => {
    e.preventDefault();
    if (!latitude && longitude || !longitude && latitude) {
      alert("Please provide both latitude and longitude.");
      return;
    }
    triggerGetWeather({ q: city, lat: Number(latitude), lon: Number(longitude) });
  };

  useEffect(() => {
    if (data) {
      dispatch(setIsPosition(true));
      const normalizedData = formatDataWeather(data);
      localStorage.setItem("weatherData", JSON.stringify(normalizedData));
      dispatch(setDataWeather(normalizedData));
      navigate("/weatherPages");
    }
  }, [data, dispatch, navigate]);

  if (isLoading) {
    return (
      <div className="loadingError d-flex justify-content-center align-items-center">
        <Bars color="#116466" />
      </div>
    );
  }

  if (isError) {
    if (city) {
      alert(`Error: ${city} is not a City Name!`)
    }

    if (latitude || longitude) {
      alert(`Error: ${latitude} ${longitude && ',' + longitude} is not the right coordinat!`)
    }

    reset();
  }

  return (
    <section className="choiceLocation p-2 d-flex flex-column gap-2 gap-md-3 justify-content-center align-items-center text-center">
      <h4>Find Out the Weather in Your Desired Location</h4>

      <ButtonGetMyLocation 
        triggerGetWeather={triggerGetWeather}
      />

      <FormInputUser 
        position={position}
        changePlace={changePlace}
      />

      <FamousCity 
        changePlace={changePlace}
        triggerGetWeather={triggerGetWeather}
      />
    </section>
  );
};

export default ChoicePlacePages;
