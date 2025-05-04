import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

const routers = createBrowserRouter([
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
  <BrowserRouter router={routers} />
);
