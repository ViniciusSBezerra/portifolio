import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Homepage } from "./pages/home/index.tsx";
import { GlobalProvider } from "./context/index.tsx";
import { Footer } from "./pages/components/footer/index.tsx";

import { Header } from "./pages/components/header/index.tsx";
import { ElectroluxProject } from "./pages/projects/Electrolux.tsx";
import { MultilaserProject } from "./pages/projects/Multilaser.tsx";
import { SauerProject } from "./pages/projects/Sauer.tsx";
import { ObramaxProject } from "./pages/projects/Obramax.tsx";

import "./reset.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/electrolux",
    element: <ElectroluxProject />,
  },

  {
    path: "/multilaser",
    element: <MultilaserProject />,
  },

  {
    path: "/sauer",
    element: <SauerProject />,
  },

  {
    path: "/obramax",
    element: <ObramaxProject />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <React.StrictMode>
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </React.StrictMode>
  </GlobalProvider>
);
