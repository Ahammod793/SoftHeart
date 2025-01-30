import React from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiSupersonicArrow } from "react-icons/gi";
import { TbBusinessplan } from "react-icons/tb";
import { GiThink } from "react-icons/gi";
export default function Contributor() {
  const contributors = "https://i.ibb.co.com/4VHnzbJ/download.jpg";
  return (
    <div className="flex flex-col md:flex-row lg:w-11/12 mx-auto text-center rounded-full h-[350px] bg-base-300 ">
      <div className="flex items-center justify-center">
        <img
          src={contributors}
          alt=""
          className="md:w-full md:h-full w-[400px] items-center justify-center"
        />
      </div>
      <div className="flex flex-col items-center justify-around ">
        <div className="flex mt-6 items-end justify-center">
          <div className="flex gap-1 m-2 items-center relative bottom-48 left-24 md:top-12 md:left-8 lg:left-14  text-secondary  rounded border border-secondary md:p-4 p-2">
            <FaPeopleRoof></FaPeopleRoof>
            <h1>Marketing</h1>
          </div>
          <div className="flex gap-1 m-2 items-center relative bottom-48 left-24 md:left-1 md:-inset-10 rounded border-1 text-secondary border border-secondary p-2 md:p-4">
            <GiSupersonicArrow></GiSupersonicArrow>Personal
          </div>
          <div className="flex gap-1 m-2 items-center relative right-28 bottom-24 md:top-12 md:right-8 lg:top-10 lg:left-28 text-secondary rounded border border-1 border-secondary p-2 md:p-4">
            <GiThink></GiThink>Social
          </div>
          <div className="flex gap-1 m-2 items-center relative right-28 bottom-24  md:right-16 md:bottom-8 lg:top-10 lg:left-28 text-secondary rounded border border-1 border-secondary p-2 md:p-4">
            <TbBusinessplan></TbBusinessplan>Business
          </div>
        </div>
        <div className="sm:relative sm:bottom-16 md:top-6  absolute">
          <h1 className="md:semibold md:text-2xl text-xl md:backdrop-blur-sm ">
            Get Help from <span className="">16000</span> contributors
          </h1>
          <h2>Share your thought around the world</h2>
        </div>
        <p></p>
      </div>
    </div>
  );
}
