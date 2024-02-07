import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "virtual:uno.css";
import Home from "./pages/home/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/home/Layout.tsx";
import GetPlayListBar from "./components/GetPlayListBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/get-list",
        element: <GetPlayListBar />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
