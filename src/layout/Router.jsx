import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../root/Root';
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';
import Order from '../pages/Order';

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
      ]
    },
  ]);

export default Router;