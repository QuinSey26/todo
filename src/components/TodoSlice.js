import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the todo list
const initialTodoState = {
  data: [
    {
      id: 1,
      content: "Task 1",
      completed: false,
    },
  ],
  editItemId: null,
};

// Create a slice of the todo list state
const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodoState,
  reducers: {
    // Add a new todo item to the list
    addTodo: (state, action) => {
      state.data.push({
        id: state.data.length + 1,
        content: action.payload,
        completed: false,
      });
    },
    // Mark a todo item as completed or incomplete
    completeTodo: (state, action) => {
      const todo = state.data.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Set the ID of the todo item to be edited
    editTodo: (state, action) => {
      state.editItemId = action.payload;
    },
    // Save changes to a todo item
    saveTodo: (state, action) => {
      if (state.editItemId) {
        const todo = state.data.find((todo) => todo.id === state.editItemId);
        if (todo) {
          todo.content = action.payload;
          state.editItemId = null;
        }
      } else {
        state.data.push({
          id: state.data.length + 1,
          content: action.payload,
          completed: false,
        });
      }
    },
    // Delete a todo item from the list
    deleteTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export the actions that can be performed on the todo list
export const { addTodo, completeTodo, editTodo, saveTodo, deleteTodo } =
  todoSlice.actions;

// Select the current state of the todo list
export const selectTodos = (state) => state.todos.data;

// Select the ID of the todo item being edited
export const selectEditItemId = (state) => state.todos.editItemId;

// Export the reducer function for the todo list
export default todoSlice.reducer;
