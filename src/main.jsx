import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Addcoffee from "./componenst/Addcoffee.jsx";
import AllUser from "./componenst/AllUser.jsx";
import CoffeeDeails from "./componenst/CoffeeDeails.jsx";
import Home from "./componenst/Home.jsx";
import Login from "./componenst/Login.jsx";
import SingUp from "./componenst/SingUp.jsx";
import UpdateCofffe from "./componenst/UpdateCofffe.jsx";
import AuthProvider from "./componenst/context/AuthProvider.jsx";
import "./index.css";
import Mainlaout from "./layout/Mainlaout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlaout,
    children: [
      {
        index: true,

        loader: () => fetch("https://y-rouge-mu-18.vercel.app/coffees"),
        Component: Home,
      },
      { path: "/addcoffee", Component: Addcoffee },
      {
        path: "/details/:id",

        loader: ({ params }) =>
          fetch(`https://y-rouge-mu-18.vercel.app/coffees/${params.id}`),
        Component: CoffeeDeails,
      },

      {
        path: "/update/:id",

        loader: ({ params }) =>
          fetch(`https://y-rouge-mu-18.vercel.app/coffees/${params.id}`),

        Component: UpdateCofffe,
      },

      { path: "/login", Component: Login },
      { path: "/singup", Component: SingUp },
      {
        path: "/alluser",

        loader: () => fetch("https://y-rouge-mu-18.vercel.app/user"),

        Component: AllUser,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
