import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    toDo: "Wash my car",
    date: "2025-01-02"
  },
  {
    toDo: "Make a Projects",
    date: "2025-02-03"
  }
]

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addTodoList: (state, action) => {
      state.push(action.payload)
    },
    removeToDolist: (state, action) => {
      state.splice(action.payload, 1)
    },
    moveUp: (state, action) => {
      const index = action.payload;
      if (index > 0) { 
        [state[index], state[index - 1]] = [state[index - 1], state[index]];
      }
    },
    moveDown: (state, action) => {
      const index = action.payload;
      if (index < state.length - 1) { 
        [state[index], state[index + 1]] = [state[index + 1], state[index]];
      }
    },
    
  }
})

export const { addTodoList, removeToDolist, moveDown, moveUp } = toDoListSlice.actions;

export default toDoListSlice.reducer;
