export const formatDataWeather = (weather) => {
  let count = 0;
  let returnDayList = [];
  let perDayList = [];

  weather?.list.forEach((data, index) => {
    const weatherData = {
      timePlace: data.dt_txt,
      tempFeels: data.main.feels_like,
      humidity: data.main.humidity + "%",
      tempAvg: data.main.temp,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      sea: data.main.sea_level,
      ground: data.main.grnd_level,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      windDirection: data?.wind?.deg,
      windSpeed: data?.wind?.speed,
      windGust: data.wind.gust,
    };

    perDayList.push(weatherData);  
    count++;

    if (count === 8) {
      returnDayList.push(perDayList);  
      perDayList = [];  
      count = 0;
    }

    if (index === weather.list.length - 1 && perDayList.length > 0) {
      returnDayList.push(perDayList); 
    }
  });

  return {
    country: weather?.city?.country.toLowerCase(),
    city: weather?.city?.name,
    dayWeatherList: returnDayList,
  };
};
