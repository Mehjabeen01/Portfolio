import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import ContactForm from './ContactForm/ContactForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
          path: "/",
          element: <Home></Home>
      },
      {
        path:"/skills",
        element: <Skills></Skills>
      },
      {
        path:"/portfolio",
        element:<Portfolio></Portfolio>
      },
      {
        path:"/contactme",
        element:<ContactForm></ContactForm>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
