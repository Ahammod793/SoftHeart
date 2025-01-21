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
import MyCampaign from "../Pages/MyCampaign";
import UpdateCamp from "../Pages/UpdateCamp";
import AllCamp from "../Layouts/AllCamp";
import Camp from "../Components/Camp";
  
  
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
          path : '/allCampaign',
          element : <AllCamp></AllCamp>,
          loader : () => fetch(`http://localhost:5000`)
        },{
          path : '/allCamp/Camp/:id',
          element : <Camp></Camp>,
          loader : ({params}) => fetch(`http://localhost:5000/camp/${params.id}`)
        }
        ,
        {
          path : '/newCampaign',
          element : <PrivateAuthentication><Campaings/></PrivateAuthentication>
        },
        {
          path : '/allCampaign',
          element : <div>this is all camp</div>
        },
        {
          path : '/myCampaign',
          element : <MyCampaign/>
        },
        {
          path : '/updateCamp/:id',
          element : <UpdateCamp></UpdateCamp>,
          loader : ({params}) => fetch(`http://localhost:5000/updateCamp/${params.id}`)
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
