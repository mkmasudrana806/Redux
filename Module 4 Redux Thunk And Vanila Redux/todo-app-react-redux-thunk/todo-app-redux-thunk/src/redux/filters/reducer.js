import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    // filter with all, incomplete, complete
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    // filter with color
    case COLORCHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default filterReducer;
