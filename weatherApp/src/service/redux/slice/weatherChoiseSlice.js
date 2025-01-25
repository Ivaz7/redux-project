import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  day: 0,
  hour: 0,
}

export const weatherChoiceSlice = createSlice({
  name: "weatherChoiceSlice",
  initialState,
  reducers: {
    setWeatherChoice: (state, action) => {
      const { hourAct, dayAct } = action.payload;

      if (hourAct !== undefined) {
        if (state.hour === hourAct) {
          state.hour = -1;  
        }
        state.hour = hourAct;
      }
    
      if (dayAct !== undefined) {
        if (state.day === dayAct) {
          state.day = -1;
        }
        state.day = dayAct;
      }    
    }
  }
})

export const { setWeatherChoice } = weatherChoiceSlice.actions;

export default weatherChoiceSlice.reducer;