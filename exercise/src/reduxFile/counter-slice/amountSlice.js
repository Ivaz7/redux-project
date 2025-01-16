import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0
}

export const amoutSclice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    changeAmount: (state, action) => {
      state.amount = action.payload;
    }
  }
})

export const { changeAmount } = amoutSclice.actions;

export default amoutSclice.reducer;

