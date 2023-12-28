// old way to connect component and redux

import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";

const Counter = ({ count, increment, decrement, id }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div id="counter" className="text-2xl font-semibold">
          {count}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => increment()}
            id="increment"
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={() => decrement()}
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
const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

//map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
