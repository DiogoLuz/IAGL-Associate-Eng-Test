import axios from "axios";
import { FETCH_TODOS, ADD_TODO } from "./types";

export function fetchTodos() {
  return function (dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

// Action to add a new todo
export function addTodo(todo) {
  return function (dispatch) {
    return axios
      .post("http://localhost:9091/api/todo", todo)
      .then(({ data }) => {
        // Dispatch an action to update the store with the new todo
        dispatch({
          type: ADD_TODO,
          payload: data,
        });
        // Refetch the list of todos to ensure synchronization
        dispatch(fetchTodos());
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        // Handle error cases if needed
      });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}
