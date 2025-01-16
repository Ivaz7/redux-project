import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter-slice/counterSlice.js'
import amountReducer from './counter-slice/amountSlice.js'
import toDoListReducer from './toDo-slice/toDoSlice.js'
import inputValTodoReducer from './toDo-slice/inputVal.js'
import randomWordReducer from './generateWord-slice/randomWordSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    amount: amountReducer,
    toDoList: toDoListReducer,
    inputValTodo: inputValTodoReducer,
    randomWord: randomWordReducer
  }
})