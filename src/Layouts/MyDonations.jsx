import React from "react";
import { useLoaderData } from "react-router-dom";
import "../index.css";
import Donation from "../Pages/Donation";
export default function MyDonations() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="min-h-screen">
      {data.map((donation, index) => (
        <Donation key={index} donation={donation}></Donation>
      ))}
      
    </div>
  );
}
