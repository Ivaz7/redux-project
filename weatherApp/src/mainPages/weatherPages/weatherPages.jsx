import TodayWeather from './today_weather/todayWeather';
import LaterDay from './laterDay_weather/laterDay';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setIsPosition } from '../../service/redux/slice/positionSlice';

const WeatherPages = () => {
  const isPosition = useSelector((state) => state.positionSlice.isPosition);
  const mainInfoRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("weatherData"));
    if (localStorageData) {
      dispatch(setIsPosition(true)); 
    }
  }, [dispatch]);
  

  return (
    <main>
      {isPosition ? (
        <div className='d-flex flex-column gap-2 align-items-center'>
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