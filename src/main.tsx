import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./context/index.tsx";
import "./app.css";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
);
