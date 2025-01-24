import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: "",
  longtitude: "",
  city: "",
  isPosition: false,
}

export const positionSlice = createSlice({
  name: "positionSlice",
  initialState,
  reducers: {
    chagePosition: (state, action) => {
      const { lat, lon, city } = action.payload;

      if (lat !== undefined) {
        state.latitude = lat;  
      }

      if (lon !== undefined) {
        state.longtitude = lon;
      }

      if (city !== undefined) {
        state.city = city;
      }
    },
    setPosition: (state) => {
      state.isPosition = !state.isPosition;
    }
  }
})

export const { chagePosition, setPosition } = positionSlice.actions;

export default positionSlice.reducer;