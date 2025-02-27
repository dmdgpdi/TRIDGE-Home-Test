import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouteInfoProvider } from "./RouteInfoProvider.tsx";
import { Routes } from "./Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteInfoProvider>
      <Routes />
    </RouteInfoProvider>
  </StrictMode>,
);
