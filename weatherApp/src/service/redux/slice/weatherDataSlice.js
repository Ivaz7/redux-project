import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null
}

export const weatherDataSlice = createSlice({
  name: "weatherDataSlice",
  initialState,
  reducers: {
    setDataWeather: (state, action) => {
      state.data = action.payload;
    }
  }
})

export const { setDataWeather } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;