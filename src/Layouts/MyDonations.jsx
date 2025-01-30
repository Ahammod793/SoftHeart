import React from "react";
import { useLoaderData } from "react-router-dom";
import "../index.css";
import Donation from "../Pages/Donation";

export default function MyDonations() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="min-h-screen">
      {data.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around w-11/12 mx-auto">
          {data.map((donation, index) => (
            <Donation key={index} donation={donation}></Donation>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center min-h-screen mx-auto w-11/12">
          <h1 className="font-medium text-3xl ">
            Oh! You haven't donated yet.
          </h1>
        </div>
      )}
    </div>
  );
}
