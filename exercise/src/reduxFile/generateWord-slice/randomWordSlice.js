import { createSlice } from "@reduxjs/toolkit";
import { fetchRandomWord } from "./generateWord";

const initialState = {
  word: '...',
  loading: false,
  error: null
}

export const randomWordSlice = createSlice({
  name: 'randomWord',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomWord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomWord.fulfilled, (state, action) => {
        state.loading = false
        state.word = action.payload
      })
      .addCase(fetchRandomWord.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Failed Error Try Again"
      })
  }
})

export default randomWordSlice.reducer;