import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Videos from "../components/videos/Videos";
import Video from "../components/videos/Video";
import AddVideoForm from "../components/videos/AddVideoForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Videos />,
      },
      {
        path: "/videos/:videoId",
        element: <Video />,
      },
      {
        path: "/edit/videos/:id",
        element: <AddVideoForm />,
      },
      {
        path: "/addVideo",
        element: <AddVideoForm />,
      },
    ],
  },
]);

export default router;
