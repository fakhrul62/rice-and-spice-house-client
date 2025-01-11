import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../routes/PrivateRoute";
import UserProfile from "../pages/UserProfile";
import Dashboard from "./Dashboard";
import Cart from "../pages/Dashboard/Cart";
import Reservation from "../pages/Dashboard/Reservation";
import Review from "../pages/Dashboard/Review";
import Bookings from "../pages/Dashboard/Bookings";
import DashHome from "../pages/Dashboard/DashHome";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "/dashboard/review",
        element: <Review></Review>,
      },
      {
        path: "/dashboard/bookings",
        element: <Bookings></Bookings>,
      },
    ],
  },
]);

export default Router;
