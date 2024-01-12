import {
  ADDPRODUCT,
  DECPRODUCTQUANTITY,
  INCPRODUCTQUANTITY,
} from "./actionTypes";
import { initialState } from "./initialState";

// --------------- get the maximum id -------------------
const productNextId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(maxId, product.id),
    0
  );
  return maxId + 1;
};

// ------------- product reducers --------------
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // add a new product
    case ADDPRODUCT: {
      return [
        ...state,
        {
          id: productNextId(state),
          ...action.payload,
        },
      ];
    }

    // decrement quantity by 1
    case DECPRODUCTQUANTITY: {
      return state.map((product) => {
        if (product?.id !== action.payload) return product;
        else {
          if (product.quantity === 0) {
            return product;
          } else
            return {
              ...product,
              quantity: product?.quantity - 1,
            };
        }
      });
    }

    // increment quantity by variable amount
    case INCPRODUCTQUANTITY: {
      return state.map((product) => {
        if (product?.id !== action.payload.id) return product;
        else {
          return {
            ...product,
            quantity: product?.quantity + action.payload.value,
          };
        }
      });
    }
    default:
      return state;
  }
};
