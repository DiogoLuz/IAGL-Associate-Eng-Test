import React from "react";

function EnterToDo() {
  return (
    <form
      method="post"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
      }}
    >
      <label>
        Enter To-Do List Item: <input name="todoListItem"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EnterToDo;
