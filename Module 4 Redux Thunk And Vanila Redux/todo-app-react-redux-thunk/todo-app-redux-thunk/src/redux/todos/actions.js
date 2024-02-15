import {
  ADDED,
  TOGGLED,
  COLORSELECTED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  DELETED,
  LOADEDTODOS,
} from "./actionTypes";

// leaded existing todos from the server
export const loadedTodos = (todos) => {
  return {
    type: LOADEDTODOS,
    payload: todos,
  };
};
//   add new todo
export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

// toggle todo status completed or not
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

// color selection changed
export const colorselected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId: todoId,
      color: color,
    },
  };
};

// delete a todo
export const deleted = (todoId) => {
  return { type: DELETED, payload: todoId };
};

// mark all todo as completed
export const allcompleted = () => {
  return { type: ALLCOMPLETED };
};

// clear completed todo
export const clearcompleted = () => {
  return { type: CLEARCOMPLETED };
};
