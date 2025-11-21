import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  NavigationType,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
