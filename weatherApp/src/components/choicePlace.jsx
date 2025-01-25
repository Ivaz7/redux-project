import { Bars } from "react-loader-spinner";
import { useLazyGetWeatherQuery } from "../service/redux/API/weatherAPI";
import { setDataWeather } from "../service/redux/slice/weatherDataSlice";
import { formatDataWeather } from "../ultils/formatDataWeather";
import { useDispatch, useSelector } from "react-redux";
import { setIsPosition, setChagePosition } from "../service/redux/slice/positionSlice";
import { useEffect } from "react";

const ChoicePlace = () => {
  const position = useSelector((state) => state.positionSlice);

  const latitude = position.latitude;
  const longitude = position.longitude;
  const city = position.city;

  const isCityFilled = city !== "";
  const isLatLonFilled = latitude || longitude;

  const dispatch = useDispatch();
  const [triggerGetWeather, { data, isLoading, isError, error }] = useLazyGetWeatherQuery();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "city") {
      dispatch(setChagePosition({ city: value || "" }));
    }
  
    if (name === "lat") {
      dispatch(setChagePosition({ lat: value || "" }));
    }
  
    if (name === "lon") {
      dispatch(setChagePosition({ lon: value || "" }));
    }
  };

  const changePlace = (e) => {
    e.preventDefault();
    
    triggerGetWeather({ q: city, lat: Number(latitude), lon: Number(longitude) });
  };
  
  useEffect(() => {
    if (data) {
      dispatch(setIsPosition());
      const normalizedData = formatDataWeather(data);
      dispatch(setDataWeather(normalizedData));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <div className="loadingError d-flex justify-content-center align-items-center">
        <Bars color="#116466" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="loadingError d-flex justify-content-center align-items-center">
        {error?.message || "Something went wrong!"}
      </div>
    );
  }

  return (
    <section className="choiceLocation p-2 d-flex flex-column gap-5 justify-content-center align-items-center">
      <h2>Find Out the Weather in Your Desired Location</h2>

      <form onSubmit={changePlace} className="inputUser">
        <input
          type="text"
          placeholder={isLatLonFilled ? "You selected Coordinate" : "Provide City Name"}
          name="city"
          value={city}
          onChange={handleChange}
          disabled={isLatLonFilled} 
        />

        <div>
          <input
            type="text"
            placeholder={isCityFilled ? "City is selected" : "Provide Latitude"}
            name="lat"
            value={latitude}
            onChange={handleChange}
            disabled={isCityFilled} 
          />
          <input
            type="text"
            placeholder={isCityFilled ? "City is selected" : "Provide Longitude"}
            name="lon"
            value={longitude}
            onChange={handleChange}
            disabled={isCityFilled} 
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="famousCity">
        {/* Display famous cities here if needed */}
      </div>
    </section>
  );
};

export default ChoicePlace;
