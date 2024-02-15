const store = require("./redux-toolkit/app/store");
const {
  counterActions,
} = require("./redux-toolkit/features/counter/counterSlice");

const {
  dynamicCounterActions,
} = require("./redux-toolkit/features/dynamicCounter/dynamicCounterSlice");
const { fetchPosts } = require("./redux-toolkit/features/posts/postsSlice");

// subscribe to store
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

// store.dispatch(dynamicCounterActions.increment(3));
// store.dispatch(dynamicCounterActions.increment(7));

store.dispatch(fetchPosts());
