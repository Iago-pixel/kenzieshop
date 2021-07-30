import { addPurchase } from "./actions";

export const addPurchaseThunk = (newPurchase) => {
  return (dispatch, getState) => {
    const { purchase } = getState();

    if (purchase.every((item) => item.name !== newPurchase.name)) {
      newPurchase.count = 0;
      dispatch(addPurchase(newPurchase));
    } else {
      purchase.forEach((item) => {
        if (item.name === newPurchase.name) {
          item.count++;
        }
      });
    }
  };
};
