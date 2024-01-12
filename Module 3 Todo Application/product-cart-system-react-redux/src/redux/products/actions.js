import {
  ADDPRODUCT,
  DECPRODUCTQUANTITY,
  INCPRODUCTQUANTITY,
} from "./actionTypes";

// add a new product
export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

// decrement quantity of a product
export const decrementQuantity = (id) => {
  return {
    type: DECPRODUCTQUANTITY,
    payload: id,
  };
};

// decrement quantity of a product
export const incrementQuantity = (id, value) => {
  return {
    type: INCPRODUCTQUANTITY,
    payload: {
      id: id,
      value: value,
    },
  };
};
