import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  units: "metric",
}

export const unitsSlice = createSlice({
  name: "unitsSlice",
  initialState,
  reducers: {
    setUnits: (state) => {
      if (state.units === "metric") {
        state.units = "imperial"; 
      } else if (state.units === "imperial") {
        state.units = "metric"; 
      }
    }
  }
})

export const { setUnits } = unitsSlice.actions;

export default unitsSlice.reducer;
