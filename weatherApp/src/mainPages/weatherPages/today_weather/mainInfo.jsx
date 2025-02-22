import WeatherCard from "../../../components/weatherCard";
import { formatTemp } from "../../../ultils/formatTemp";
import { useUnits } from "../../../hooks/useUnits";

const MainInfoWeather = (prop) => {
  const units = useUnits();
  const { description, humidity, icon, tempAvg, tempFeels, tempMax, tempMin, weather, windDirection, windSpeed, sea, ground, windGust } = prop.mainInfoWeather;

  const wdDirec = windDirection || 0;
  
  return (
    <div className="mainInfoWeather d-flex flex-sm-row flex-column gap-1">
      <div className="mainInfoWeather_header d-flex flex-column align-items-center text-center gap-1 gap-md-2">
        <div className="mainInfoWeather_header_top d-flex flex-row gap-1 align-items-center justify-content-center">
          <h2>{weather}</h2>
          <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        </div>

        <div className="mainInfoWeather_header_bottom">
          <h5>{description}</h5>
          <h3>{formatTemp(tempAvg, units)}</h3>
        </div>
      </div>

      <div className="mainInfoWeather_body row p-1 p-md-2 d-flex justify-content-center align-items-center gap-1 mx-0 mx-sm-2">
        <WeatherCard 
          label={"Highest"}
          icon={"fa-fire"}
          value={tempMax}
          unitsStatus={"temp"}
          headingLevel={"h4"}
        />

        <WeatherCard 
          label={"Lowest"}
          icon={"fa-icicles"}
          value={tempMin}
          unitsStatus={"temp"}
          headingLevel={"h4"}
        />  

        <WeatherCard 
          label={"Feels"}
          icon={"fa-user"}
          value={tempFeels}
          unitsStatus={"temp"}
          headingLevel={"h4"}
        />      

        <WeatherCard 
          label={"Humidity"}
          icon={"fa-droplet"}
          value={humidity}
          headingLevel={"h4"}
        />    

        <WeatherCard 
          label={"Sea"}
          icon={"fa-water"}
          value={sea}
          unitsStatus={"press"}
          headingLevel={"h4"}
        />

        <WeatherCard 
          label={"Ground"}
          icon={"fa-road-spikes"}
          value={ground}
          unitsStatus={"press"}
          headingLevel={"h4"}
        />
        
        <WeatherCard 
          label={"Wind"}
          icon={"fa-compass"}
          value={wdDirec}
          unitsStatus={"deg"}
          rotate={windDirection}
          headingLevel={"h4"}
        />     

        <WeatherCard 
          label={"Wind"}
          icon={"fa-wind"}
          value={windSpeed}
          unitsStatus={"speed"}
          headingLevel={"h4"}
        />           

        <WeatherCard 
          label={"Gust"}
          icon={"fa-wind"}
          value={windGust}
          unitsStatus={"speed"}
          headingLevel={"h4"}
        />
      </div>
    </div>
  )
}

export default MainInfoWeather