import React, { useState, useEffect } from "react"
import '../index.css'
import { Link, useLoaderData } from "react-router-dom";
export default function Camp() {
  const data = useLoaderData()
  const {  title, campType, campaignStart, campaignEnd, campDiscription, donation, file, name, email} = data;
  const [situation, setSituation] = useState("");

  useEffect(() => {
    const now = new Date();
    const startTime = new Date(campaignStart);
    const endTime = new Date(campaignEnd);

    if (now < startTime) {
      setSituation("Not Start Yet");
    } else if (now > endTime) {
      setSituation("Ended");
    } else {
      setSituation("Running");
    }
  }, [campaignStart, campaignEnd]);

  const formattedStart = new Date(campaignStart).toLocaleString();
  const formattedEnd = new Date(campaignEnd).toLocaleString();

  return (
    <>
      <div className="lg:w-8/12 md:w-10/12 sm:11/12 flex flex-col mx-auto my-8 p-6 rounded-xl shadow-lg bg-[#404019] shadow-slate-900">
        <div className="m-3 p-1 border rounded-md bg-slate-400">
          <img
            src={file || "https://via.placeholder.com/150"}
            alt={title}
           className="border rounded-md w-full h-96 bg-slate-600" 
          />
        </div>
        <div className="box-content m-4">
          <div>
            <p className="text-md font-semibold text-[#92ff2c]">
              {situation === "Not Start Yet" && (
                <>Start Time: {formattedStart}</>
              )}
              {situation === "Ended" && <>End Time: {formattedEnd}</>}
              {situation === "Running" && (
                <>
                  Started: {formattedStart} <br />
                  Ends: {formattedEnd}
                </>
              )}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-green-500 font-thin text-end"><strong className="border p-2 rounded-md border-[#efef3d]">{situation}</strong></p>
            <h1 className="font-bold text-start text-[#ffffff] text-2xl text-shadoww border-b-4 mb-6 pb-2 ">{title}</h1>
          </div>
         
          <div className="mb-4">
            <p className="text-sm">{campDiscription}</p>
          </div>
          <div>
            <h4 className="font-bold text-xl ">Author : <span className=" italic font-light text-yellow-500">{name}</span></h4>
            <h4 className="font-bold text-xl ">Mail : <span className=" italic font-light text-yellow-500">{email}</span></h4>
          </div>
          <div className="flex flex-row text-xl font-thin  items-center justify-between my-8">
            <p>Campaination Type : <span className="italic text-yellow-500 ">{campType}</span></p>
            <p>Min. donation Amount <span className="italic text-yellow-500">{donation}</span> TK</p>
          </div>
        </div>
      </div>
    </>
  );
}
