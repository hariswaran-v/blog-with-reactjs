import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import GuestLayot from "./layout/Guest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayot />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
