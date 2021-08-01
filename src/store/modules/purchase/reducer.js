import { ADD_PURCHASE, REMOVE_PURCHASE, UPDATE_PURCHASE } from "./actionsTypes";

export const purchaseReducer = (state = [], action) => {
  console.log("chegou");
  switch (action.type) {
    case ADD_PURCHASE:
      const { newPurchase } = action;
      return [...state, newPurchase];
    case REMOVE_PURCHASE:
      const { purchaseForRemove } = action;
      return state.filter((item) => item.name !== purchaseForRemove.name);
    case UPDATE_PURCHASE:
      const { purchaseForUpdate } = action;
      return state.map((item) => {
        if (item.id === purchaseForUpdate.id) {
          return purchaseForUpdate;
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};
