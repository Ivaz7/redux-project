import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoVal: '',
  dateVal: ''
}

export const inputValTodoSlice = createSlice({
  name: 'inputValTodo',
  initialState,
  reducers: {
    setTodoVal: (state, action) => {
      state.toDoVal = action.payload;
    },
    setDateVal: (state, action) => {
      state.dateVal = action.payload;
    }
  }
})

export const { setTodoVal, setDateVal } = inputValTodoSlice.actions;

export default inputValTodoSlice.reducer;