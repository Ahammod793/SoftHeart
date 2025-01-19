import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function EachCamp({ eachData }) {
  const startTime = new Date(eachData.campaignStart);
  const endTime = new Date(eachData.campaignEnd);
  const now = new Date();
  const date = startTime.toISOString().split("T")[0];
  const Time = startTime.toISOString().split("T")[1].split(".")[0];
  const title = eachData.title;
  const file = eachData.file;
  const details = eachData.campDiscription.slice(0, 200);
  const category = eachData.campType;

  const navigate = useNavigate();
  const deleteHundler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You cann't restore it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/campaign/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount>0){
            Swal.fire({
              title: "Deleted!",
              text: "Your campaign has been deleted.",
              icon: "success",
            }).then(navigate('/'))
          };
          });
      }
    });
  };
  return (
    <div className="group justify-between grid grid-cols-4 grid-rows-2 p-2 mt-4 border border-purple-500">
      <div className="row-span-2 bg-red h-[200px] mr-2 bg-slate-300 border group-hover:border-black ">
        {file && (
          <img src={file} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="col-span-3 bg-slate-200 border group-hover:border-black px-3 pt-2 mb-2">
        <h1 className="text-black font-bold text-2xl">{title}</h1>
        <p>{details}</p>
      </div>
      <div className="col-span-2 flex flex-row items-center justify-around bg- border group-hover:border-black mr-2">
        <div>
          <h4 className="text-xl text-black font-semibold">
            {now < startTime
              ? "Not Start Yet"
              : now > endTime
              ? "Ended"
              : "Running"}
          </h4>
        </div>
        <p>{category} Campaign</p>
        <div>
          <h3>stert : {date}</h3>
          <h3>End : {endTime.toISOString().split("T")[0]}</h3>
        </div>
      </div>
      <div className=" border group-hover:border-black flex flex-row text-center items-center justify-around">
        <Link to={`/updateCamp/${eachData._id}`}>
          <button className="btn btn-outline btn-neutral">Update</button>
        </Link>
        <button
          className="btn btn-outline btn-neutral"
          onClick={() => deleteHundler(eachData._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
