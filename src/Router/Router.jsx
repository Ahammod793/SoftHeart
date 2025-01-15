import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import AccessLayOut from "../Layouts/AccessLayOut";
import Login from "../Pages/Login";
import Register from "./Register";
import Home from "../Layouts/Home";
  
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        }
      ]
    },
    {
        path: 'soft_heart_register_accessPage',
        element : <AccessLayOut/>,
        children : [
            {
                path : '/soft_heart_register_accessPage',
                element : <Login></Login>
            },
            {
                path : 'soft_heart_register',
                element : <Register></Register>
            }
        ]
    }
  ]);
