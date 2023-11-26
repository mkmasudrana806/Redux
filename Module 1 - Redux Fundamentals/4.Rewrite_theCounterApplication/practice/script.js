// select DOM element
const incrementEl = document.querySelector("#increment");
const DecrementEl = document.querySelector("#decrement");
const counterEl = document.querySelector("#counter");



// action indentifies
const INCREMETN = "increment";
const DECREMENT = "decrement";

// action creators
// increment action creators
const increment = (value) => {
  return {
    type: INCREMETN,
    payload: value,
  };
};

// decrement action creators
const decrement = (value) => {
  return { type: DECREMENT, payload: value };
};

// initial state
const initialState = {
  value: 0,
};

// create reducer function: bussiness logic
function counterReducer(state = initialState, action) {
  if (action.type === INCREMETN) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
};

// update UI initially
render();

// when store is updated, render callback function will be called
store.subscribe(render);

// button click listener

incrementEl.addEventListener("click", () => {
  store.dispatch(increment(2));
});

DecrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
