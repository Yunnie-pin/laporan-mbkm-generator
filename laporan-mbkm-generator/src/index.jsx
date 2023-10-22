import React from "react";
import ReactDOM from "react-dom/client";
import Base from "./components/base";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import DisclaimerPage from "./components/pages/DisclaimerPage";
import DocumentBulananPage from "./components/pages/DocumentBulananPage";
import { CookiesProvider } from "react-cookie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base children={<HomePage />} />,
  },
  {
    path: "/disclaimer",
    element: <Base children={<DisclaimerPage />} />,
  },
  {
    path: "/documentbulanan",
    element: <DocumentBulananPage/>
  },
  {
    path: "/:path*",
    element: <Base children={<NotFoundPage />} />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);
