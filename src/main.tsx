import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CountryProvider } from "../src/contexts/countryContext";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryProvider>
        <App />
      </CountryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
