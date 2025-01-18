import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import AccessLayOut from "../Layouts/AccessLayOut";
import Login from "../Pages/Login";
import Register from "./Register";
import Home from "../Layouts/Home";
import Campaings from "../Components/Campaings";
import PrivateAuthentication from "../Auth/PrivateAuthentication";
  
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/newCampain',
          element : <PrivateAuthentication><Campaings/></PrivateAuthentication>
        },
        {
          path : '/allCampaign',
          element : <div>this is all camp</div>
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
