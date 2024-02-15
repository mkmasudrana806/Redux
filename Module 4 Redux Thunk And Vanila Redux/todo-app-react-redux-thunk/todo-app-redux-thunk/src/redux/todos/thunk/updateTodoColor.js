import { colorselected } from "../actions";

const updateTodoColor = (todoId, color) => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: { "Content-Type": "application/json ; charset=  UTF-8" },
    });
    // updated color from the database
    const todo = await response.json();

    // now store this updated value into redux store
    dispatch(colorselected(todoId, todo.color));
  };
};

export default updateTodoColor;
