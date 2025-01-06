import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../root/Root';
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';
import Order from '../pages/Order';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
            element: <OurMenu></OurMenu>
        },
        {
            path: "/order",
            element: <Order></Order>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
      ]
    },
  ]);

export default Router;