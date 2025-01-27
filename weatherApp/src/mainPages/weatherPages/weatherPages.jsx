import TodayWeather from './today_weather/todayWeather';
import LaterDay from './laterDay_weather/laterDay';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WeatherPages = () => {
  const isPosition = useSelector((state) => state.positionSlice.isPosition);
  const weatherData = useSelector((state) => state.weatherDataSlice.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPosition || !weatherData || Object.keys(weatherData).length === 0) {
      navigate('/');
    }
  }, [isPosition, weatherData, navigate]);

  return (
    <main>
      {isPosition && weatherData && Object.keys(weatherData).length > 0 ? (
        <>
          <TodayWeather />
          <LaterDay />
        </>
      ) : (
        <div>Loading or Invalid Data</div>
      )}
    </main>
  );
};


export default WeatherPages;