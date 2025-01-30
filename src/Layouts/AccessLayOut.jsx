import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/SoftHeart.png";
export default function AccessLayOut() {
  return (
    <div className="flex h-screen gap-8 justify-center items-center text-center">
      <div className="">
        <h1 className="text-3xl font-light ">
          Hi <span className=" font-bold">There</span>,
        </h1>
        <h1 className="text-xl font-thin">WellCome to</h1>
        <div className="pt-8">
          <img
            src={logo}
            alt="SoftHeart"
            className="text-3xl font-bold  w-[250px] h-[200px]"
          />
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
