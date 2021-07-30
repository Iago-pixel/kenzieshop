import { ADD_PRODUCTS } from "./actionsTypes.js";

export const addProducts = (newProducts) => ({
  type: ADD_PRODUCTS,
  newProducts,
});
