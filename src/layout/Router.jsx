import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../root/Root';
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';

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
      ]
    },
  ]);

export default Router;