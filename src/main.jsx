import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes } from "react-router-dom";
import Router from "./Routes/router.jsx";
import {HelmetProvider } from "react-helmet-async";
// import { router } from './Routes/router.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App></App>
    </HelmetProvider>
  </StrictMode>,
);
