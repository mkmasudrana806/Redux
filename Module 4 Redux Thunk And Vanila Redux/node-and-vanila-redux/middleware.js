const fetch = require("node-fetch");

const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/todoLoadded") {
    console.log("i am delaying you");
    setTimeout(() => {
      next(action);
      return; // since this is asynchronous, so below return will work. so stop immediately
    }, 2000);
  }

  return next(action);
};

// Node: node support fetch api to call api request but it is experimental. need to install npm i node-fetch@2 version 2
// fetch API requests for todos
const fetchasyncMiddleware = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return action(store.dispatch(), store.getState());
  }
  return next(action);
};

module.exports = {
  delayActionMiddleware,
  fetchasyncMiddleware,
};
