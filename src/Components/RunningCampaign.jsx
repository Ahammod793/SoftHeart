import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RunningCampaign() {
  const [runCamp, setRunCamp] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/runningcamp`)
      .then((res) => res.json())
      .then((data) => {
        setRunCamp(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-12">
      {runCamp.map((camp) => {
        return (
          <div className="lg:w-11/12  sm:w-5/6 flex flex-col mx-auto my-7 p-1 rounded-xl shadow-lg shadow-slate-900 border border-secondary bg-success  text-secondary">
            <div className="m-1 md:m-3 lg:m-4 p-1 border rounded-md">
              <img
                src={camp.file}
                alt={camp.title}
                className="border rounded-md w-full h-64 md:h-80 lg:h-96"
              />
            </div>
            <div className="box-content  m-2 lg:m-4">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-start lg:text-2xl md:text-xl text-md text-shadoww border-b-4 mb-6 pb-2">
                  {camp.title}
                </h1>
              </div>

              <div className="mb-4">
                <p className="text-sm">
                  {camp.campDiscription.split(" ").slice(0, 40).join(" ") +
                    "..."}
                </p>
              </div>

              <div className=" flex flex-col  text-xl font-thin justify-between gap-6 my-4">
                <div className="grid  lg:grid-cols-2">
                  <p>
                    Campaination Type :{" "}
                    <span className="italic  ">
                      {camp.campType}
                    </span>
                  </p>
                  <p>
                    Min. donation Amount{" "}
                    <span className="italic ">
                      {camp.donation}
                    </span>{" "}
                    TK
                  </p>
                </div>
                <Link
                  className="btn btn-outline btn-ghost  col-span-2"
                  to={`/campaign/${camp._id}`}
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
