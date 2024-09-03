import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routers/Router/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='bg-slate-900'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>
)
