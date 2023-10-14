import React from "react";
import ReactDOM from "react-dom/client";
import Base from "./components/base";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base children={<HomePage />} />,
  },
  {
    path: "/disclaimer",
    element: <Base children={<>Disclaimer</>} />,
  },
  {
    path: "/:path*",
    element: <Base children={<NotFoundPage />} />,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
