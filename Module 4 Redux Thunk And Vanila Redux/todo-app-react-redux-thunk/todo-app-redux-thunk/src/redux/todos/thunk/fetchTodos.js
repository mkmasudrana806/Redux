import { loadedTodos } from "../actions";

const fetchTodos = async (dispatch, getState) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();
  dispatch(loadedTodos(todos));
};

export default fetchTodos;
