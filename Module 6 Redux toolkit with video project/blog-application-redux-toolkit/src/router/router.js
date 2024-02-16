import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Main from "../components/layout/Main";
import BlogDetails from "../components/pages/BlogDetails";

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
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);
