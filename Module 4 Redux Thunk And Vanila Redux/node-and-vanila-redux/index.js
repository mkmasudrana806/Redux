const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./function");
const { thunk } = require("redux-thunk");

// initialState
const initialState = {
  todos: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/added": {
      return {
        ...state,
        todos: [...state.todos, { title: action.payload }],
      };
    }

    case "todos/todoLoadded": {
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    }

    default:
      break;
  }
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk));

// subscribe to state changes
store.subscribe(() => {
  console.log("inside subscribe ");
  console.log(store.getState());
});

// // dispatch action
// store.dispatch({ type: "todos/todoLoadded", payload: "learn redux with lws" });

// dispatch action to fetch todo data from API server, dispatch with a thunk function
store.dispatch(fetchTodos);
