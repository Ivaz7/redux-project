import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomWord = createAsyncThunk(
  'data/fetchRandomWord',
  async (arg, thunk) => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      if (!response.ok) {
        throw new Error("Failed to fetch word");
      }
      return await response.json();
    } catch (err) {
      return thunk.rejectWithValue(err.messeage)
    }
  }
)