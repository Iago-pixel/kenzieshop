import { createStore, combineReducers, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

import { purchaseReducer } from "./modules/purchase/reducer";
import { productsReducer } from "./modules/products/reducer";

const reducers = combineReducers({
  products: productsReducer,
  purchase: purchaseReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
