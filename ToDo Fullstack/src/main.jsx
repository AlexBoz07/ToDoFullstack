import React from 'react'
import ErrorPage from './errorPage.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Memoria from './Servicios/Memoria.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Memoria>
    <RouterProvider router={router} />
   </Memoria>
  </React.StrictMode>,
)
