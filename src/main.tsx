import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./reset.css";
import { Homepage } from "./pages/home/index.tsx";
import { GlobalProvider } from "./context/index.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  </GlobalProvider>
);
