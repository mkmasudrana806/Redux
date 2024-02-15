import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";

// filter with status like completed, incompleted, or
export const statuschanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

// fiilter with colors
export const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color: color,
      changeType: changeType,
    },
  };
};
