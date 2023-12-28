import { DDECREMENT, DINCREMENT } from "./actionTypes";

// counter reducer
const initialState = {
  value: 0,
};

const dynamicCounterReducer = (state = initialState, action) => {
  // use switch for standard practice
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return { ...state };
  }
};

export default dynamicCounterReducer;
