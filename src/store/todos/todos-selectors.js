// CONSTS
import { ALL, ACTIVE, COMPLETED } from "../filters/filters-consts";

export const todosSelector = (state, filter) => {
  switch (filter) {
    case ALL:
      return state.todos;
    case ACTIVE:
      return state.todos.filter((todo) => todo.checked === false);
    case COMPLETED:
      return state.todos.filter((todo) => todo.checked === true);
    default:
      return state.todos;
  }
};
