import React from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiSupersonicArrow } from "react-icons/gi";
import { TbBusinessplan } from "react-icons/tb";
import { GiThink } from "react-icons/gi";
export default function Contributor() {
  const contributors = "https://i.ibb.co.com/4VHnzbJ/download.jpg";
  return (
    <div className="flex flex-row w-11/12 mx-auto text-center bg-[#1d1b1b] rounded-full h-[350px]">
      <div className="flex items-center justify-center">
        <img
          src={contributors}
          alt=""
          className="full h-full items-center justify-center"
        />
      </div>
      <div className="flex flex-col items-center justify-around">
        <div className="flex mt-6 items-end justify-center">
          <div className="flex gap-1 m-2 items-center relative lg:left-14 rounded border p-4">
            <FaPeopleRoof></FaPeopleRoof>
            <h1>Marketing</h1>
          </div>
          <div className="flex gap-1 m-2 items-center relative lg:top-10 lg:right-32 rounded border p-4">
            <GiSupersonicArrow></GiSupersonicArrow>Personal
          </div>
          <div className="flex gap-1 m-2 items-center relative lg:top-20 lg:left-48 rounded border p-4">
            <GiThink></GiThink>Social
          </div>
          <div className="flex gap-1 m-2 items-center relative bottom-12 rounded border p-3">
            <TbBusinessplan></TbBusinessplan>Business
          </div>
        </div>
        <div>
          <h1 className="semibold text-2xl backdrop-blur-sm ">
            Get Help from <span className="text-yellow-500">16000</span> contributors
          </h1>
          <h2>Share your thought around the world</h2>
        </div>
        <p></p>
      </div>
    </div>
  );
}
