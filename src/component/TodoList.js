import React, { Component } from "react";
import Todo from "./Todo";
import { addTodo, fetchTodos } from "../actions";
import { connect } from "react-redux";
import TodoListForm from "./TodoListForm";

class TodoList extends Component {
  state = {}; // Component's state (currently empty)

  componentDidMount() {
    // Fetch todos when the component mounts
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props.data; // Extract todos from Redux state

    return (
      <div>
        <ul className="todo-list">
          {todos && todos.length
            ? todos.map((todo, index) => {
                return <Todo key={`todo-${index}`} todo={todo.task} />;
              })
            : "No todos, yay!"}
        </ul>
        {/* Render EnterToDo form and pass addTodo as prop */}
        <TodoListForm addTodo={addTodo} />
      </div>
    );
  }
}

// Map Redux state to component props
const mapStateToProps = ({ data = {} }) => ({
  data, // Pass the 'data' (todos) as props
});

export default connect(mapStateToProps, {
  fetchTodos, // Connect fetchTodos action to props
  addTodo, // Connect addTodo action to props
})(TodoList); // Export the connected component
