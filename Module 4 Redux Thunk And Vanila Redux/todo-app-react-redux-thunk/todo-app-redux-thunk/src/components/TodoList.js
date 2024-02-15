import React, { useEffect } from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // load todos from the server
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  // filter by status
  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Completed":
        return todo.completed;
      case "Incompleted":
        return !todo.completed;
      default:
        return true;
    }
  };

  // filter by colors
  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
