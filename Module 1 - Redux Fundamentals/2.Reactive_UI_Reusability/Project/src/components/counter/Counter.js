import React from "react";

const Counter = ({ increment, decrement, id, count }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div id="counter" className="text-2xl font-semibold">
          {count}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => increment(id)}
            id="increment"
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={() => decrement(id)}
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

export default Counter;
