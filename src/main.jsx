import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import Router from './layout/Router';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  
  <HelmetProvider>
    <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
  </HelmetProvider>
)
