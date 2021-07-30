import { ADD_PRODUCTS } from "./actionsTypes";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      const { newProducts } = action;
      return [...state, ...newProducts];

    default:
      return state;
  }
};
