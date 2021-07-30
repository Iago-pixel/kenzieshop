import { ADD_PURCHASE, REMOVE_PURCHASE } from "./actionsTypes";

export const purchaseReducer = (state = [], action) => {
  console.log("chegou");
  switch (action.type) {
    case ADD_PURCHASE:
      const { newPurchase } = action;
      return [...state, newPurchase];
    case REMOVE_PURCHASE:
      const { purchaseForRemove } = action;
      console.log(state.filter((item) => item.name !== purchaseForRemove.name));
      return state.filter((item) => item.name !== purchaseForRemove.name);

    default:
      return state;
  }
};
