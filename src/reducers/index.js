import { ADD_TODO, FETCH_TODOS } from "../actions/types";

export default function (state = { todo: [] }, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, data: action.payload };

    case ADD_TODO:
      return { ...state, data: [...state.todo, action.payload] };
    default:
      return state;
  }
}
