//new way to get the state and dispatch from redux
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
} from "../../redux/dynamicCounter/actionCreators";

const DynamicHooksCounter = () => {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  // now can dispatch any action
  const incrementHandler = (value) => {
    dispatch(increment(value));
  };
  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div id="counter" className="text-2xl font-semibold">
          {count}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => incrementHandler(5)}
            id="increment"
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={() => decrementHandler(2)}
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

export default DynamicHooksCounter;
