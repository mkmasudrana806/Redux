import { createBrowserRouter } from "react-router-dom";
import Home from "../components/layout/Home";
import Main from "../components/layout/Main";
import AddBook from "../components/books/AddBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
      {
        path: "/editBook/:id",
        element: <AddBook />,
      },
    ],
  },
]);
