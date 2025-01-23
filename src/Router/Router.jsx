import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import AccessLayOut from "../Layouts/AccessLayOut";
import Login from "../Pages/Login";
import Register from "./Register";
import Home from "../Layouts/Home";
import Campaings from "../Components/Campaings";
import PrivateAuthentication from "../Auth/PrivateAuthentication";
import UpdateCamp from "../Pages/UpdateCamp";
import AllCamp from "../Layouts/AllCamp";
import MyDonations from "../Layouts/MyDonations";
import MyCampaign from "../Layouts/MyCampaign";
import CampDetails from "../Components/Camp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/campaigns",
        element: <AllCamp></AllCamp>,
        loader: () => fetch(`http://localhost:5000`),
      },
      {
        path: "/campaign/:id",
        element:<PrivateAuthentication> <CampDetails /></PrivateAuthentication>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/camp/${params.id}`),
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateAuthentication>
            <Campaings />
          </PrivateAuthentication>
        ),
      },
      {
        path: "/myCampaign",
        element:  <PrivateAuthentication><MyCampaign /></PrivateAuthentication>,
      },
      {
        path: "/myDonations/:mail",
        element: <PrivateAuthentication><MyDonations></MyDonations></PrivateAuthentication>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/donarDetails/${params.mail}`),
      },
      {
        path: "/updateCampaign/:id",
        element: <PrivateAuthentication><UpdateCamp></UpdateCamp></PrivateAuthentication>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateCamp/${params.id}`),
      },
    ],
  },
  {
    path: "soft_heart_register_accessPage",
    element: <AccessLayOut />,
    children: [
      {
        path: "/soft_heart_register_accessPage",
        element: <Login></Login>,
      },
      {
        path: "soft_heart_register",
        element: <Register></Register>,
      },
    ],
  },
]);
