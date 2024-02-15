import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statuschanged } from "../redux/filters/actions";

// remaining task conditions
function todoConditions(no) {
  switch (no) {
    case 0:
      return "No task";
    case 1:
      return "1 task left";
    default:
      return `${no} tasks left`;
  }
}

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const todosRemaining = todos.filter((todo) => !todo.completed).length;
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleFilterStatus = (status) => {
    dispatch(statuschanged(status));
  };

  const handleColorChange = (color) => {
    if (filters.colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{todoConditions(todosRemaining)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleFilterStatus("All")}
          className={`cursor-pointer ${
            filters.status === "All" && "font-bold"
          } `}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleFilterStatus("Incompleted")}
          className={`cursor-pointer ${
            filters.status === "Incompleted" && "font-bold"
          }`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleFilterStatus("Completed")}
          className={`cursor-pointer ${
            filters.status === "Completed" && "font-bold"
          }`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
