// CORE
import { combineReducers } from "redux";
// REDUCERS
import { todos } from "./todos/todos-reducer";
import { filters } from "./filters/filters-reducer";

export const rootReducer = combineReducers({
  todos,
  filters,
});
