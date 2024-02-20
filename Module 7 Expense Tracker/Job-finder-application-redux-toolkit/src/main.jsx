import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/app/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
