import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: 0,
  longtitude: 0,
  city: "",
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
    },
    setPosition: (state) => {
      state.isPosition = !state.isPosition;
    }
  }
})

export const { chagePosition, setPosition } = positionSlice.actions;

export default positionSlice.reducer;