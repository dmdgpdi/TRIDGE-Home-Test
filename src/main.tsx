import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RouteInfoProvider } from "./RouteInfoProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteInfoProvider>
      <App />
    </RouteInfoProvider>
  </StrictMode>,
);
