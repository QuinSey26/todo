import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";

// Define a React component called Input
export default function Input() {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Define a function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const content = e.target.elements.input.value.trim(); // Get the input value and remove any leading/trailing whitespace
    if (content) {
      // Check if the input value is not empty
      dispatch(addTodo(content)); // Dispatch an action to add a new todo item with the input content
      e.target.reset(); // Reset the form input field
    }
  }

  // Return a form element with an input field and a submit button
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input type="text" name="input" placeholder="What tasks is for today?" />
      <button className="addBtn" type="submit">
        Add
      </button>
    </form>
  );
}
