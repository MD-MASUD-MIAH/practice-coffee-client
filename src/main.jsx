import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Mainlaout from './layout/Mainlaout.jsx'
import Home from './componenst/Home.jsx'
import Addcoffee from './componenst/Addcoffee.jsx'
import CoffeeDeails from './componenst/CoffeeDeails.jsx'
import UpdateCofffe from './componenst/UpdateCofffe.jsx'




const router =  createBrowserRouter([


    {path:'/',Component:Mainlaout,children:[


      {index:true, 
        
        loader:()=>fetch('http://localhost:5000/coffees'),
        Component:Home},
      {path:'/addcoffee',Component:Addcoffee},
      {path:'/details/:id',
        
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
        Component:CoffeeDeails},

        {path:'/update/:id',
          
             loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
          
          Component:UpdateCofffe}
    ]}
  ])
createRoot(document.getElementById('root')).render(


  
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
