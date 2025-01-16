import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increamnet: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    increamnetByAmount: (state, action) => {
      state.count += action.payload;
    },
    decreamentByAmount: (state, action) => {
      state.count -= action.payload;
    }
  }
})

export const { increamnet, decreament, increamnetByAmount, decreamentByAmount } = counterSlice.actions;

export default counterSlice.reducer;