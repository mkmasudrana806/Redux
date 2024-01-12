import {
  DECREMENTCARTQUANTITY,
  INCREMENTCARTQUANTITY,
  REMOVECART,
} from "./actionTypes";

// increment cart quantity
export const incrementCartQuantity = (item) => {
  return {
    type: INCREMENTCARTQUANTITY,
    payload: item,
  };
};

// decrement cart quantity
export const decrementCartQuantity = (id) => {
  return {
    type: DECREMENTCARTQUANTITY,
    payload: id,
  };
};

// remove an cart item from carts
export const deleteCartItem = (id) => {
  return {
    type: REMOVECART,
    payload: id,
  };
};
