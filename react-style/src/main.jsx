import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUp from "./components/SignUp.jsx";
import Table from "./components/Table.jsx";
import SignIn from "./components/SignIn.jsx";
import NotFound from "./components/NotFound.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SignIn />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/table",
//     element: <Table />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>
);
