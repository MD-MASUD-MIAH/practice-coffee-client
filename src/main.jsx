import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Mainlaout from './layout/Mainlaout.jsx'
import Home from './componenst/Home.jsx'
import Addcoffee from './componenst/Addcoffee.jsx'




const router =  createBrowserRouter([


    {path:'/',Component:Mainlaout,children:[


      {index:true, Component:Home},
      {path:'/addcoffee',Component:Addcoffee}
    ]}
  ])
createRoot(document.getElementById('root')).render(


  
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
