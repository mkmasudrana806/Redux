import { DECREMENT, INCREMENT } from "./actionTypes";

// increment actions creators
export function increment() {
  return { type: INCREMENT };
}

// decrement actions creators
export function decrement() {
  return { type: DECREMENT};
}
