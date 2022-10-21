import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css';
import './styles/styles.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main'
import Error from './pages/Error'
import Womens from './pages/Womens'
import Mens from './pages/Mens'
import Travel from './pages/Travel'
import Beauty from './pages/Beauty'
import Sale from './pages/Sale'
import Checkout from './pages/Checkout'
import {store} from './store'
import { Provider } from "react-redux"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Checkout/>
      },
      {
        path: '/home',
        element: <Checkout/>
      },
      {
        path: '/womens',
        element: <Womens/>
      },
      {
        path: '/mens',
        element: <Mens />
      },
      {
        path: '/travel',
        element: <Travel />
      },
      {
        path: '/beauty',
        element: <Beauty />
      },
      {
        path: '/sale',
        element: <Sale />
      },
      {
        path: '/*',
        element: <Error />
      }
    ]
  },

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
