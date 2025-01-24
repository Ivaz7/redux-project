import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: null,
  longtitude: null,
  city: null,
  isPosition: false,
}

export const positionSlice = createSlice({
  name: "positionSlice",
  initialState,
  reducers: {
    chagePosition: (state, action) => {
      const { lat, lon, city } = action.payload;

      state.latitude = lat;
      state.longtitude = lon;
      state.city = city;
    }
  }
})

export const { chagePosition } = positionSlice.actions;

export default positionSlice.reducer;