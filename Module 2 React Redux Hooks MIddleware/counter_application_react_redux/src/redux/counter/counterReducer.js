import { DECREMENT, INCREMENT } from "./actionTypes";

// counter reducer
const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  // use switch for standard practice
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return { ...state };
  }
};

export default counterReducer;
