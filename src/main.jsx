import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Login from './pages/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Product.jsx'
import ProductList from './pages/ProductsList.jsx';
import SingleProduct from './pages/SingleProduct.jsx'
import Layout from './components/Layout.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/products",
          element: <Products />,
          children: [
            {
              path: "",
              element: <ProductList />
            },
            {
              path: ":id",
              element: <SingleProduct />
            }
          ]
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