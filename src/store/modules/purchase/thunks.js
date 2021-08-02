import { addPurchase, updatePurchase } from "./actions";

export const addPurchaseThunk = (newPurchase) => {
  return (dispatch, getState) => {
    const { purchase } = getState();

    if (purchase.every((item) => item.name !== newPurchase.name)) {
      newPurchase.count = 1;
      newPurchase.input = 1;
      dispatch(addPurchase(newPurchase));
    } else {
      newPurchase.count++;
      newPurchase.input = newPurchase.count;
      dispatch(updatePurchase(newPurchase));
    }
  };
};
