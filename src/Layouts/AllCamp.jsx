import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
export default function AllCamp() {
  const data = useLoaderData();

  return (
    <div>
      <table className="w-11/12 h border border-gray-300 my-12 mx-auto">
        <tr className="group-odd:bg-green-600 text-xl font-bold">
          <th className="text-center p-2 border w-[3/30]">Si.</th>
          <th className="text-center p-2 border w-[5/30]">Thumb</th>
          <th className="text-start pl-4 border w-[14/30]">Title</th>
          <th className="text-center p-2 border w-[4/30]">Status</th>
          <th className="text-center p-2 border w-[4/30]">Details</th>
        </tr>

        {data.map((singleCamp, index) => (
          <tr className="even:bg-zinc-500" key={index}>
            <td className="p-2 border text-center">{index+1}</td>
            <td className="border">
              <img src={singleCamp.file} alt="" className="w-full h-12" />
            </td>
            <td className="pl-4 border">
              {singleCamp.title}
            </td>
            <td className="p-2 border text-center">
              {new Date() < new Date(singleCamp.campaignStart)
                ? "Not Start Yet"
                : new Date() > new Date(singleCamp.campaignEnd)
                ? "Ended"
                : "Running"}
                {/* {console.log(singleCamp._id)} */}
            </td>
            <td className="p-2 border items-center text-center"><Link to={`/campaign/${singleCamp._id}`}><button className="w-full h-full hover:underline btn">See More</button></Link></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
