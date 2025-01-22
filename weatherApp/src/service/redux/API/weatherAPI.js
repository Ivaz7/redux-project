import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiToken = import.meta.env.VITE_API_TOKEN;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/', 
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lon }) => ({
        url: 'weather',  
        params: {
          lat,
          lon,
          appid: apiToken,
          units: 'metric'  
        }
      })
    })
  })
})

export const { useGetWeatherQuery } = weatherApi;