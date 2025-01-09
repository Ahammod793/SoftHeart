import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import AccessLayOut from "../Layouts/AccessLayOut";
import Login from "../Pages/Login";
import Register from "./Register";
  
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
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
