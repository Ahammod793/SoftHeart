import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/SoftHeart.png";
import { AuthContext } from "../Auth/AuthProvider";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-between items-stretch px-10 py-8 bg-base-100">
        <div>
          <ul className="text-xl   ">
            <h1 className="font-bold text-xl  pb-4">Legel</h1>
            <li className="pt-2">
              <Link className="hover:text-secondary active:text-sky-400">
                Privacy policy
              </Link>
            </li>
            <li className="pt-4  md:pt-2">
              <Link className="hover:text-secondary active:text-sky-400">
                Coocky policy
              </Link>
            </li>
            <li className="pt-4 md:pt-2">
              <Link className="hover:text-secondary active:text-sky-400">
                Terms of uses
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-xl">
            <h1 className="font-bold text-xl  pb-4">Condition</h1>
            <li className="pt-2">
              <Link className="hover:text-secondary active:text-sky-400">
                Donars Condition
              </Link>
            </li>
            <li className="pt-4  md:pt-2">
              <Link className="hover:text-secondary active:text-sky-400">
                Donars Support
              </Link>
            </li>
            <li className="pt-4  md:pt-2">
              <Link className="hover:text-secondary active:text-sky-400">
                Advisor condition
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <ul className="text-xl   gap-8">
            <li>
              <Link className="hover:text-secondary active:text-sky-400">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary active:text-sky-400">
                Contuct Us
              </Link>
            </li>
            <div className="font-light text-xl pt-5">
              <p>Sopura, Boyalia Rajshahi</p>
              <p>Rajshahi Polytecnic Institute</p>
              <p>Shahid Neyamtulla-hostel Room-#208</p>
            </div>
          </ul>
        </div>
        <img
          src={logo}
          alt="SoftHeart"
          className=" font-extrabold text-3xl w-[230px]"
        />
      </div>
    </>
  );
}
