// old way to connect component and redux

import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";
import {
  decrement as dynamicDecrement,
  increment as dynamicIncrement,
} from "../../redux/dynamicCounter/actionCreators";

const VariableCounter = ({ count, increment, decrement, id }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div id="counter" className="text-2xl font-semibold">
          {count}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => increment(5)}
            id="increment"
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={() => decrement(2)}
            id="decrement"
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

// map state to props
const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic
      ? state.dynamicCounter.value
      : state.hooksCounter.value,
  };
};

//map Dispatch to props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: (value) =>
      ownProps.dynamic
        ? dispatch(dynamicIncrement(value))
        : dispatch(increment()),
    decrement: (value) =>
      ownProps.dynamic
        ? dispatch(dynamicDecrement(value))
        : dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
