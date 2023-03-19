// CONSTS
import { SET_FILTER } from "./filters-consts";

export const filtersAction = (filter) => ({
  type: SET_FILTER,
  filter,
});
