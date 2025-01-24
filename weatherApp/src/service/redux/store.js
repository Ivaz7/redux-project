import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { weatherApi } from "./API/weatherAPI";
import positionReducer from "./slice/positionSlice";
import weatherDataReducer from "./slice/weatherDataSlice";
import weatherChoiceReducer from "./slice/weatherChoiseSlice";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    positionSlice: positionReducer,
    weatherDataSlice: weatherDataReducer,
    weatherChoiceSlice: weatherChoiceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch);