import ReactDOM from "react-dom/client";
import "./index.css";
import "virtual:uno.css";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/home/Layout.tsx";

import AuthRequire from "./components/base/AuthRequire.tsx";
import LoginLayout from "./pages/home/LoginLayout.tsx";

const home: RouteObject[] = ["/", "/callback"].map((path) => ({
  path,
  element: (
    <AuthRequire redirectTo={<Layout />}>
      <LoginLayout />
    </AuthRequire>
  ),
  children: [],
}));

const router = createBrowserRouter([...home]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
