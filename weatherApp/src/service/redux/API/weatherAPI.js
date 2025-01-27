import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiToken = import.meta.env.VITE_API_OPENWEATHER;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/', 
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lon, q }) => {
        if (lat && lon) {
          return {
            url: 'forecast',  
            params: {
              lat,
              lon,
              appid: apiToken,
              units: 'metric'  
            }
          }
        } else {
          return {
            url: 'forecast',  
            params: {
              q,
              appid: apiToken,
              units: 'metric'  
            }
          }
        }
      },
      lazy: true,
    })
  })
});

export const { useLazyGetWeatherQuery } = weatherApi;
