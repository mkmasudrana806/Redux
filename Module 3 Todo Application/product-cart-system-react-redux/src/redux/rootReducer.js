import { combineReducers } from "redux";
import { productReducer } from "./products/reducer";
import { cartReducer } from "./billings/reducer";

const combine = {
  products: productReducer,
  carts: cartReducer,
};
export const rootReducer = combineReducers(combine);
