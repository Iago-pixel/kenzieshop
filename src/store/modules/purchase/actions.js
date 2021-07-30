import { ADD_PURCHASE, REMOVE_PURCHASE } from "./actionsTypes.js";

export const addPurchase = (newPurchase) => ({
  type: ADD_PURCHASE,
  newPurchase,
});

export const removePurchase = (purchaseForRemove) => ({
  type: REMOVE_PURCHASE,
  purchaseForRemove,
});
