import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "@/providers";
import { GlobalStyles } from "@/styles";
import { App } from "./App.tsx";
import { localStorageApp } from "@/adapters";
import { planetsStorage } from "@/domain";

export const appStorage = localStorageApp();
export const appPlanetsStorage = planetsStorage(appStorage);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
);
