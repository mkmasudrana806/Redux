import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/app/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
      </Provider>
    </RouterProvider>
  </React.StrictMode>
);
