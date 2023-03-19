// CONSTS
import { SET_FILTER, ALL } from "./filters-consts";

const initialState = ALL;

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return (state = action.filter);
    default:
      return state;
  }
};
