import TodayWeather from './today_weather/todayWeather';
import LaterDay from './laterDay_weather/laterDay';
import { useSelector } from 'react-redux';

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const WeatherPages = () => {
  const isPosition = useSelector((state) => state.positionSlice.isPosition);
  const weatherData = useSelector((state) => state.weatherDataSlice.data);
  const navigate = useNavigate();

  const mainInfoRef = useRef(null);

  useEffect(() => {
    if (!isPosition || !weatherData || Object.keys(weatherData).length === 0) {
      navigate('/');
    }
  }, [isPosition, weatherData, navigate]);

  return (
    <main>
      {isPosition && weatherData && Object.keys(weatherData).length > 0 ? (
        <div className='d-flex flex-column gap-2'>
          <TodayWeather mainInfoRef={mainInfoRef} />
          <LaterDay mainInfoRef={mainInfoRef} />
        </div>
      ) : (
        <div>Loading or Invalid Data</div>
      )}
    </main>
  );
};


export default WeatherPages;