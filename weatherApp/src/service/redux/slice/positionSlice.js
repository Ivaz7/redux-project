import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: "",
  longitude: "",
  city: "",
  isPosition: false,
}

export const positionSlice = createSlice({
  name: "positionSlice",
  initialState,
  reducers: {
    setChagePosition: (state, action) => {
      const { lat, lon, city } = action.payload;

      if (lat !== undefined) {
        state.latitude = lat;  
      }

      if (lon !== undefined) {
        state.longitude = lon;
      }

      if (city !== undefined) {
        state.city = city;
      }
    },
    setIsPosition: (state) => {
      state.isPosition = !state.isPosition;
    }
  }
})

export const { setChagePosition, setIsPosition } = positionSlice.actions;

export default positionSlice.reducer;