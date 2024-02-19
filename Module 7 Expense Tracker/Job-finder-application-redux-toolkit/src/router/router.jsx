import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MainBody from "../components/layout/MainBody";
import AddNewJob from "../components/jobs/AddNewJob";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "/addJob",
        element: <AddNewJob />,
      },
    ],
  },
]);
