import { useState } from "react";
import "./App.css";
import Count from "./components/counter/Count";
import Counter from "./components/counter/Counter";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

function App() {
  const [state, setState] = useState(initialState);

  // increment counter value based on object
  const increment = (id) => {
    const newIncrement = state.map((c) => {
      if (c.id === id) {
        return { ...c, count: c.count + 1 };
      }
      return { ...c };
    });
    setState(newIncrement);
  };

  // decrement based on the object id
  const decrement = (id) => {
    const newDecrement = state.map((c) => {
      if (c.id === id) {
        return { ...c, count: c.count - 1 };
      }
      return { ...c };
    });
    setState(newDecrement);
  };

  // total count calculate
  // since we have track of each counter with unique id
  const totalCount = () => {
    const count = state.reduce((total, c) => total + c.count, 0);
    return count;
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      {state.map((counter) => (
        <Counter
          key={counter.id}
          increment={increment}
          decrement={decrement}
          id={counter.id}
          count={counter.count}
        />
      ))}
      <Count totalCount={totalCount} />
    </div>
  );
}

export default App;
