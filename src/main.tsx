import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./context/index.tsx";
import "./app.css";
import Loading from "./pages/components/Loading/Loading.tsx";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Suspense>

);
