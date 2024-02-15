const fetch = require("node-fetch");

const fetchTodos = async (dispatch, getState) => {
  console.log("this is called with dispatch");
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  // convert response to json object, because we go stream in response
  const todo = await response.json();

  // after fetch todo data now dispatch todoLoaded
  dispatch({
    type: "todos/todoLoadded",
    payload: todo,
  });
  console.log(`number of updated todos:${getState().todos.length}}`);
  return;
};

module.exports = {
  fetchTodos,
};
