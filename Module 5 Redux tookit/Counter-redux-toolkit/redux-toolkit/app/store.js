// import configureStore method
const { configureStore } = require("@reduxjs/toolkit");

// import all reducers here
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const postsReducer = require("../features/posts/postsSlice");

const { createLogger } = require("redux-logger");

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    posts: postsReducer,
  },
  middleware: (defaultMiddlewares) => {
    return defaultMiddlewares().concat(createLogger());
  },
});

// export store
module.exports = store;
