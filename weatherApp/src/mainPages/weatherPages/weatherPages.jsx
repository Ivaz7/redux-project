import TodayWeather from './today_weather/todayWeather';
import LaterDay from './laterDay_weather/laterDay';
import { useSelector } from 'react-redux';

const WeatherPages = () => {
  const isPosition = useSelector((state) => state.positionSlice.isPosition);

  return (
    <main>    
      {isPosition && 
        <>
          <TodayWeather />
          <LaterDay />
        </>
      }
    </main>
  )
}

export default WeatherPages;