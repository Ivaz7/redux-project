import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: null,
  longtitude: null,
}

export const positionSlice = createSlice({
  name: "positionSlice",
  initialState,
  reducers: {
    chagePosition: (state, action) => {
      const { lat, lon } = action.payload;

      state.latitude = lat;
      state.longtitude = lon;
    }
  }
})

export const { chagePosition } = positionSlice.actions;

export default positionSlice.reducer;