import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css';
import './styles/styles.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main'
import Error from './pages/Error'
import Checkout from './pages/Checkout'
import {store} from './store'
import { Provider } from "react-redux"
import Product from './components/Product'
import Catalog from './pages/Catalog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Checkout />
      },
      {
        path: '/home',
        element: <Checkout />
      },
      {
        path: '/catalog',
        element: <Catalog />,
        children: [
          {
            path: '/catalog/:category',
            element: <Catalog/>,
          },
        ]
      },
      {
        path: '/product/:sku',
        element: <Product />,
      },
      {
        path: '/*',
        element: <Error />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
