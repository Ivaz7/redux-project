import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null
}

export const weatherDataSlice = createSlice({
  name: "weatherDataSlice",
  initialState,
  reducers: {
    changeDataWeather: (state, action) => {
      state.data = action.payload;
    }
  }
})

export const { changeDataWeather } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;