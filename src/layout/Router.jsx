import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Root from '../root/Root';
import Home from '../pages/Home';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
      ]
    },
  ]);

export default Router;