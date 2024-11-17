import React, { Component } from "react";
import Todo from "./Todo";
import { fetchTodos } from "../actions";
import { connect } from "react-redux";
import EnterToDo from "./EnterToDo";

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props.data;
    return (
      <div>
        <ul className="todo-list">
          {todos && todos.length
            ? todos.map((todo, index) => {
                return <Todo key={`todo-${index}`} todo={todo.task} />;
              })
            : "No todos, yay!"}
        </ul>
        <EnterToDo />
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});
export default connect(mapStateToProps, {
  fetchTodos,
})(TodoList);
