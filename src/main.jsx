import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Project from './components/Project.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/home",
    element: <Home/>
  },
  
  {
    path: "/about",
    element: <About/>
  },

  {
    path: "/resume",
    element: <Resume/>
  },
  {
    path: "/project",
    element: <Project/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
