//This code creates a Redux store with a reducer for managing todo items.
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../components/TodoSlice";

//Create a Redux store with a reducer for managing todo items.
export const store = configureStore({
  reducer: { todos: todoReducer },
});
