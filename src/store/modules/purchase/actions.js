import {
  ADD_PURCHASE,
  REMOVE_PURCHASE,
  UPDATE_PURCHASE,
} from "./actionsTypes.js";

export const addPurchase = (newPurchase) => ({
  type: ADD_PURCHASE,
  newPurchase,
});

export const removePurchase = (purchaseForRemove) => ({
  type: REMOVE_PURCHASE,
  purchaseForRemove,
});

export const updatePurchase = (purchaseForUpdate) => ({
  type: UPDATE_PURCHASE,
  purchaseForUpdate,
});
