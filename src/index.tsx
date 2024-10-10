import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Give from './components/Give';
import Redeem from './components/Redeem';
import GraphQL from './components/GraphQL';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/give",
        element: <Give />
      },
      {
        path: "/redeem",
        element: <Redeem />
      },
      {
        path: "/graphql",
        element: <GraphQL />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  {
    
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
