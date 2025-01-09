import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import logo from "../assets/SoftHeart.png";
import { GoSun } from "react-icons/go";
import { IoIosMoon } from "react-icons/io";
import { AuthContext } from "../Auth/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../FireBase/firebase.config";
export default function NavBar() {
  const {user,setUser} = useContext(AuthContext)
  const [thame, setThame] = useState(false);
  const navigate = useNavigate()
  const day_night_thame = () => {
    setThame(!thame);
    console.log(thame);
  };
  const logoutHundle=()=>{
    signOut(auth).then(() => {
      // console.log('loguot Success')
      setUser(null)
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <header className="flex flex-row items-center justify-between px-10 bg-[r#99daf8] bg-[#26343c] py-2">
      <Link>
        <img src={logo} alt="softHeart" className="w-[140px] h-[50px]" />
      </Link>
      <nav className="navbar-center">
        <ul className="flex flex-row justify-around gap-10 text-white  text-xl">
          <li>
            <Link className="hover:border-b-white hover:border-b-2 pb-1 active:border-none">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:border-b-white hover:border-b-2 pb-1 active:border-none">
              All Campaign
            </Link>
          </li>
          <li>
            <Link className="hover:border-b-white hover:border-b-2 pb-1 active:border-none">
              New Campaign
            </Link>
          </li>
          <li>
            <Link className="hover:border-b-white hover:border-b-2 pb-1 active:border-none">
              My Campaign
            </Link>
          </li>
          <li>
            <Link className="hover:border-b-white hover:border-b-2 pb-1 active:border-none">
              My Donations
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex  items-center gap-4">
        <div
          className="bg-white w-6 h-6 flex items-center justify-center rounded-full cursor-pointer"
          onClick={day_night_thame}
        >
          {thame ? (
            <IoIosMoon className="w-5 h-5" />
          ) : (
            <GoSun className="w-5 h-5"></GoSun>
          )}
        </div>
        {
          user?<div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full border border-green-400">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-100 border border-green-400 rounded-box z-[1] mt-3 w-42 p-4 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link ><button onClick={logoutHundle}>Logout</button></Link>
            </li>
          </ul>
        </div> 
        : <Link to='/soft_heart_register_accessPage' className="text-2xl text-white  hover:border-2 hover:border-dotted border-2 rounded-lg p-1"><button >Login</button></Link>   
        }
      </div>
    </header>
  );
}
