import React, { useState } from "react";
import { addTodo } from "../actions"; // Import the addTodo action
import { connect } from "react-redux"; // Import connect from react-redux

export function TodoListForm({ addTodo }) {
  const [error, setError] = useState(""); // State to store error message

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page on submit

    // Get form data and check if the todoListItem is empty
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const todoListItem = formData.todoListItem.trim(); // Trim whitespace

    if (!todoListItem) {
      setError("To-Do cannot be empty!"); // Show error message if the input is empty
    } else {
      setError(""); // Clear any previous error message
      addTodo({ task: todoListItem }); // Dispatch addTodo action with valid input
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Enter To-Do List Item: <input name="todoListItem" />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message if there is one */}
      <button type="submit">Submit</button> {/* Submit button to add todo */}
    </form>
  );
}

// Use connect to pass addTodo as a prop to the TodoListForm component
export default connect(null, { addTodo })(TodoListForm);
