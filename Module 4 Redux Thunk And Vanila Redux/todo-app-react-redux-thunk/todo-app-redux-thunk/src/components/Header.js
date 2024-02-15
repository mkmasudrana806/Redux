import React, { useState } from "react";
import noteImg from "../assets/images/notes.png";
import doubleTick from "../assets/images/double-tick.png";
import plus from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { added, allcompleted, clearcompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // add new todo
  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  // complete all
  const handleCompleteAll = () => {
    dispatch(allcompleted());
  };

  // clear completed all
  const handleClearComplete = () => {
    dispatch(clearcompleted());
  };
  return (
    <div>
      <form
        onSubmit={addTodoHandler}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className={`appearance-one w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleCompleteAll}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearComplete} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
