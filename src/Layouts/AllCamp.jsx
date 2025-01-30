import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
export default function AllCamp() {
  const data = useLoaderData();
  const [camps, setCamps] = useState(data)

  
  const sortHundler=()=>{
        const scamps = [...camps].sort((campA, campB) => campB.donation - campA.donation);
        setCamps(scamps

        );
  }
  
  
  return (
    <div className="flex flex-col">
      <div className="flex justify-end items-end  mt-8 mb-4 ">
        <button className="border border-secondary text-secondary p-2 hover:bg-green-500 btn" onClick={sortHundler}>Sort by Min Donation</button>
      </div>
      <table className="w-11/12 border border-primary  mb-12 mx-auto">
        <tr className="group-odd:bg-green-600 text-sm md:text-xl font-bold">
          <th className="hidden md:flex text-center p-2 border w-[3/30]">Si.</th>
          <th className="text-center p-1 md:p-2 border text-sm md:text-xl w-[5/30]">Thumb</th>
          <th className="text-start  p-1 md:pl-4 text-sm md:text-xl border w-[14/30]">Title</th>
          <th className="text-center p-1  md:p-2 text-sm md:text-xl border w-[4/30]">Details</th>
          <th className="text-center p-1  md:p-2 text-sm md:text-xl border w-[4/30]">Status</th>
        </tr>

        {camps.map((singleCamp, index) => (
          <tr className="even:bg-info" key={index}>
            <td className="p-2 items-center justify-center text-center hidden md:flex">{index+1}</td>
            <td className="border">
              <img src={singleCamp.file} alt="" className="w-full  h-12" />
            </td>
            <td className="md:pl-4 pl-1 border  md:text-xl text-sm">
              {singleCamp.title}
            </td>
            <td className="md:p-2 p-1 border text-center md:text-xl text-sm">
              {new Date() < new Date(singleCamp.campaignStart)
                ? "Not Start Yet"
                : new Date() > new Date(singleCamp.campaignEnd)
                ? "Ended"
                : "Running"}
                {/* {console.log(singleCamp._id)} */}
            </td>
            <td className="md:p-2 p-1 border items-center text-center "><Link to={`/campaign/${singleCamp._id}`}><button className="w-full h-full hover:underline btn text-sm bg-base-300 border border-secondary">See More</button></Link></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
