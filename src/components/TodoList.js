import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  completeTodo,
  editTodo,
  saveTodo,
  deleteTodo,
  selectTodos,
  selectEditItemId,
} from "./TodoSlice";

// This component renders a list of todos and provides functionality to add, edit, complete, and delete todos.
export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const editItemId = useSelector(selectEditItemId);



  // This function handles the completion of a todo item.
  function handleComplete(id) {
    dispatch(completeTodo(id));
  }

  // This function handles the initiation of editing a todo item.
  function handleEdit(id) {
    dispatch(editTodo(id));
  }

  // This function handles the submission of an edited todo item.
  function handleSave(e, id) {
    e.preventDefault();
    const content = e.target.elements.input.value.trim();
    if (content) {
      dispatch(saveTodo(content));
      e.target.reset();
    }
  }

  // This function handles the cancellation of editing a todo item.
  function handleCancel() {
    dispatch(editTodo(null));
  }

  // This function handles the deletion of a todo item.
  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  // This component renders a list of todo items.
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li className="listItem" key={todo.id}>
          {editItemId === todo.id ? (
            // If the todo item is being edited, render a form to save or cancel the edit.
            <form onSubmit={(e) => handleSave(e, todo.id)}>
              <input type="text" defaultValue={todo.content} name="input" />
              <button className="saveBtn" type="submit">
                Save
              </button>{" "}
              <button
                className="cancelBtn"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </form>
          ) : (
            // If the todo item is not being edited, render the item content and buttons to edit, complete, or delete the item.
            <>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleComplete(todo.id)}
                />
                <span className={todo.completed ? "completed" : ""}>
                  {todo.content}
                </span>
              </label>
              <button
                className="editBtn"
                type="button"
                onClick={() => handleEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className="deleteBtn"
                type="button"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
