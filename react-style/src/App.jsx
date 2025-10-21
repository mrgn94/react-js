import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Table from "./components/Table";
import SignIn from "./components/SignIn";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";

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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" />;
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/table"
          element={
            <PrivateRoute>
              <Table setIsLoggedIn={setIsLoggedIn} />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PrivateRoute>
              <SignUp setIsLoggedIn={setIsLoggedIn} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
