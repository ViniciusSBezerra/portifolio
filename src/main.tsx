import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalProvider } from "./context/index.tsx";

import { App } from "./App.tsx";

import "./app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>
);
