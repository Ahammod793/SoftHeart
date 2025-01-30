import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../assets/SoftHeart.png";
import { GoSun } from "react-icons/go";
import { FaCampground } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { AuthContext } from "../Auth/AuthProvider";
import { themeProvider } from "../Components/ThemeContext";
export default function NavBar() {
  const { logOut, user, setUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(themeProvider);
  // const [theme, setThame] = useState(false);
  const navigate = useNavigate();
  console.log(theme);
  const logoutHundle = () => {
    logOut()
      .then(() => {
        // console.log('loguot Success')
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // console.log(user.photoURL)
  return (
    <header
      data-theme={theme ? "light" : "dark"}
      className="flex flex-row text-center items-center justify-between px-10  py-2 sticky bg-primary text-secondary"
    >
      <div className="flex md:hidden dropdown dropdown-start bg-bistre">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <IoReorderThreeOutline className="text-2xl" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 text-bistre  shadow"
        >
          <li>
            <Link className="hover:border-b-white hover:border-b-2 pb-1 active:border-none">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/campaigns"
              className="hover:border-b-white hover:border-b-2 pb-1 active:border-none"
            >
              All Campaign
            </Link>
          </li>
          <li>
            <Link
              to="/addCampaign"
              className="hover:border-b-white hover:border-b-2 pb-1 active:border-none"
            >
              New Campaign
            </Link>
          </li>
          <li>
            <Link
              to="/myCampaign"
              className="hover:border-b-white hover:border-b-2 pb-1 active:border-none"
            >
              My Campaign
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-white hover:border-b-2 pb-1 active:border-none"
              to={
                user?.email
                  ? `/myDonations/${user.email}`
                  : "/soft_heart_register_accessPage"
              }
            >
              My Donations
            </Link>
          </li>
        </ul>
      </div>
      <Link>
        <img
          src={logo}
          alt="softHeart"
          className="w-[70px] h-8 md:w-[100px] md:h-[40px] lg:w-[140px] lg:h-[50px]"
        />
      </Link>
      <nav className="navbar-center ">
        <ul className="hidden md:flex flex-row justify-around gap-10   text-xl ">
          <li className="items-center text-center">
            <Link className="hover:border-b-white hover:border-b-2 pb-1 active:border-none">
              <span className=" hidden lg:flex">Home</span>
              <FaHome className="flex lg:hidden"></FaHome>
            </Link>
          </li>
          <li>
            <Link
              to="/campaigns"
              className="hover:border-b-white hover:border-b-2 pb-1 active:border-none"
            >
              <span className="md:flex lg:hidden" title="All Campaign">
                AllCamp
              </span>
              <span className="lg:flex  hidden">All Campaign</span>
            </Link>
          </li>
          <li>
            <Link
              to="/addCampaign"
              className="hover:border-b-white hover:border-b-2 pb-1 active:border-none"
            >
              <span className="  md:flex lg:hidden" title="New Campaign">
                NewCamp
              </span>{" "}
              <span className="lg:flex hidden">New Campaign</span>
            </Link>
          </li>
          <li>
            <Link
              to="/myCampaign"
              className="hover:border-b-white hover:border-b-2 pb-1 active:border-none"
            >
              <span className="  md:flex lg:hidden" title="  My Campaign">
                MyCamp
              </span>
              <span className="lg:flex  hidden">My Campaign</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-white hover:border-b-2 pb-1 active:border-none"
              to={
                user?.email
                  ? `/myDonations/${user.email}`
                  : "/soft_heart_register_accessPage"
              }
            >
              <span className="  md:flex lg:hidden" title="My Donation">
                MyDon
              </span>
              <span className="lg:flex hidden">My Donation</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex  items-center gap-4">
        <div
          className="bg-secondary w-7 h-7 flex items-center justify-center rounded-full cursor-pointer"
          onClick={toggleTheme}
        >
          {theme ? (
            <IoIosMoon className="w-6 h-6 text-white rounded-full " title="dark" />
          ) : (
            <GoSun className="w-5 h-5 text-black" title="light"></GoSun>
          )}
        </div>
        {user ? (
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border border-green-400">
                <img
                  alt={user.displayName}
                  src={
                    user.photoURL || "https://i.ibb.co.com/vvpKSdP/download.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100 border border-green-400 rounded-box z-[1] mt-3 w-42 p-4 shadow"
            >
              <li>
                <button onClick={logoutHundle} className="text-secondary bg-success">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/soft_heart_register_accessPage"
            className="text-2xl   hover:border-2 hover:border-dotted border-2 rounded-lg p-1"
          >
            <button>Login</button>
          </Link>
        )}
      </div>
    </header>
  );
}
