import "./App.css";
import Counter from "./components/counter/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterHooks from "./components/counter/CounterHooks";
import DynamicHooksCounter from "./components/counter/DynamicHooksCounter";
import VariableCounter from "./components/counter/VariableCounter";

const initialState = [
  {
    id: 1,
    count: 0,
  },
];

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
        {/* <Counter id={2} /> */}
        <h1>Counter with hooks</h1>
        <CounterHooks />
        <h1>Dynamic hooks counter</h1>
        <DynamicHooksCounter />
        <h1>variable and dynamic counter with 5 and 2 inc, decrement</h1>
        <VariableCounter dynamic />
        <h1>below is is not dynamic, it inc,decmented by 1</h1>
        <VariableCounter />
      </div>
    </Provider>
  );
}

export default App;
