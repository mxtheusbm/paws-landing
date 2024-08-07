import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import Hotjar from "./helpers/hotjar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Hotjar />
    <App />
  </React.StrictMode>
);
