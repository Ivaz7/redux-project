import { formatDeg } from "../ultils/formatDeg";
import { useGetWeather } from "./customHooks/useGetWeather";

const WeatherData = () => {
  const weather =  useGetWeather(-6.2088, 106.8456);

  if (weather === "loading") {
    return <div>Loading ...</div>
  }

  if (typeof weather !== "object") {
    return <div>{weather}</div>
  }

  const renderWeather = weather.map((info, index) => {
    if (info[0] === "icon") {
      return (
        <li key={index}>
          <img src={`http://openweathermap.org/img/wn/${info[1]}.png`} alt="weather icon" />
        </li>
      );
    }
  
    if (info[0] === "temp") {
      return (
        <div key={index}>
          <li>Average Temp: {info[1][0][1]} °C</li>
          <li>Minimum Temp: {info[1][1][1]} °C</li>
          <li>Maximum Temp: {info[1][2][1]} °C</li>
        </div>
      );
    }

    if (info[0] === "Wind Direction") {
      return <li key={index}>{info[0]}: {formatDeg(info[1])}</li>
    }

    if (info[0] === "Humidity") {
      return <li key={index}>{info[0]}: {info[1]}%</li>
    }
  
    return <li key={index}>{info[0]}: {info[1]}</li>;
  });
  

  return (
    <ul>
      {renderWeather}    
    </ul>
  )
}

export default WeatherData;