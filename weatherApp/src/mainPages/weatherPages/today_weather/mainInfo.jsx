import WeatherCard from "../../../components/weatherCard";
import { formatTemp } from "../../../ultils/formatTemp";

const MainInfoWeather = (prop) => {
  const { description, humidity, icon, tempAvg, tempFeels, tempMax, tempMin, weather, windDirection, windSpeed } = prop.mainInfoWeather;

  const wdDirec = windDirection || 0;
  
  return (
    <div className="mainInfoWeather d-flex flex-sm-row flex-column gap-1">
      <div className="mainInfoWeather_header d-flex flex-column align-items-center text-center gap-2">
        <div className="mainInfoWeather_header_top d-flex flex-row gap-1 align-items-center justify-content-center">
          <h2>{weather}</h2>
          <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        </div>

        <div className="mainInfoWeather_header_bottom">
          <h5>{description}</h5>
          <h3>{tempAvg}°C | {formatTemp(tempAvg)}°F</h3>
        </div>
      </div>

      <div className="mainInfoWeather_body row p-2 d-flex justify-content-center align-items-center mx-0 mx-sm-2">
        <WeatherCard 
          label={"Highest"}
          icon={"fa-fire"}
          value={tempMax}
          units={"°C"}
          headingLevel={"h4"}
        />

        <WeatherCard 
          label={"Lowest"}
          icon={"fa-icicles"}
          value={tempMin}
          units={"°C"}
          headingLevel={"h4"}
        />  

        <WeatherCard 
          label={"Feels"}
          icon={"fa-user"}
          value={tempFeels}
          units={"°C"}
          headingLevel={"h4"}
        />      

        <WeatherCard 
          label={"Humidity"}
          icon={"fa-droplet"}
          value={humidity}
          units={"%"}
          headingLevel={"h4"}
        />    

        <WeatherCard 
          label={"Wind"}
          icon={"fa-compass"}
          value={wdDirec}
          units={""}
          rotate={windDirection}
          headingLevel={"h4"}
        />     

        <WeatherCard 
          label={"Wind"}
          icon={"fa-wind"}
          value={windSpeed}
          units={"kp/h"}
          headingLevel={"h4"}
        />           
      </div>
    </div>
  )
}

export default MainInfoWeather