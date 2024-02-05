import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "virtual:uno.css";
import Home from "./pages/home/Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
