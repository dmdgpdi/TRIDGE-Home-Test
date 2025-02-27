import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryProvider } from "./QueryProvider.tsx";
import { Routes } from "./Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>,
);
