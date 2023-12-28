import { DDECREMENT, DINCREMENT } from "./actionTypes";

// increment actions creators
export function increment(value) {
  return { type: DINCREMENT, payload: value };
}

// decrement actions creators
export function decrement(value) {
  return { type: DDECREMENT, payload: value };
}
