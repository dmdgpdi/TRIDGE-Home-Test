import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryProvider } from "./QueryProvider.tsx";
import { RouteInfoProvider } from "./RouteInfoProvider.tsx";
import { Routes } from "./Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <RouteInfoProvider>
        <Routes />
      </RouteInfoProvider>
    </QueryProvider>
  </StrictMode>,
);
