import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Product.jsx';
import ProductsList from './pages/ProductsList.jsx';





const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <Login />
    },

    {
      path: "/about",
      element: <About />
    },
    {
      path: "/home",
      element: <Home />

    },
    {
      path: "/products",
      element: <Products />,
      children: [
        {
          path: "",
          element: <ProductsList />
        },
        {
          path: ":id",
          element: <h1>Single Product</h1>
        }
      ]
    },

  ]

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
