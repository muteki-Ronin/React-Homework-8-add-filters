// CONSTS
import {
  ADD_TODO,
  CHECKED_TODO,
  EDIT_TODO,
  DELETE_TODO,
  DELETE_ALL,
} from "./todos-consts";

export const addTodo = (title) => ({
  type: ADD_TODO,
  title,
});

export const checkedTodo = (id) => ({
  type: CHECKED_TODO,
  id,
});

export const editTodo = (id, title) => ({
  type: EDIT_TODO,
  id,
  title,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const deleteAll = () => ({
  type: DELETE_ALL,
});
