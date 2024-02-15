import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOADEDTODOS,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";

// get the next todo id for new todo
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id), -1);
  return maxId + 1;
}

// todo reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // loaded existing todo from the server
    case LOADEDTODOS: {
      return action.payload;
    }

    // added new todo
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
        },
      ];

    // toggle todo status completed to incompleted and vice versa
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      });

    // color selected and changed the selected todo color
    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        } else {
          return {
            ...todo,
            color: color,
          };
        }
      });

    // delete a todo
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    // completed all the todo
    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    // clear completed
    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default todoReducer;
