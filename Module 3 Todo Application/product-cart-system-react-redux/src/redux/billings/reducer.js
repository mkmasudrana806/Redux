import {
  DECREMENTCARTQUANTITY,
  INCREMENTCARTQUANTITY,
  REMOVECART,
} from "./actionTypes";
import { initialState } from "./initialState";

// added to cart reducer
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // add to cart and increment existing quantity
    case INCREMENTCARTQUANTITY: {
      const found = state.find((cart) => cart?.id === action.payload.id);
      if (found) {
        return state.map((cart) => {
          return cart.id === action.payload.id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart;
        });
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    // decrement existing quantity
    case DECREMENTCARTQUANTITY: {
      return state.map((cart) => {
        if (cart?.id !== action.payload) return cart;
        else return { ...cart, quantity: cart.quantity - 1 };
      });
    }

    // remove an item from existing cart items
    case REMOVECART: {
      return state.filter((cart) => cart.id !== action.payload);
    }
    default:
      return state;
  }
};
