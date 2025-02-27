import React, { useState, useEffect, useContext } from "react";
import "../index.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";
export default function CampDetails() {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    campType,
    campaignStart,
    campaignEnd,
    campDiscription,
    donation,
    file,
    name,
    email,
  } = data;
  const [situation, setSituation] = useState("");
  const navigate = useNavigate();
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

  const donationHundler = () => {
    const donarName = user.displayName;
    const donarMail = user.email;
    const campID = _id;
    const thumb = file;
    const donatedAmount = donation;
    const headline = title;
    const donationSituation = situation;
    const donationDate = new Date();
    const donarDetails = {
      campID,
      donarName,
      donarMail,
      thumb,
      donatedAmount,
      headline,
      donationSituation,
      donationDate,
    };
    fetch(`http://localhost:5000/donarDetails`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(donarDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "success",
          text: "Donation Succed",
          icon: "success",
        }).then(navigate(`/myDonations/${donarMail}`));
      });
  };

  return (
    <>
      <div className="lg:w-8/12 md:w-10/12 sm:11/12 flex flex-col mx-auto my-8 p-6 rounded-xl shadow-lg  shadow-slate-900 border border-secondary  bg-success">
        <div className="m-3 p-1 rounded-md border border-secondary">
          <img
            src={file}
            alt={title}
            className="border rounded-md w-full h-96"
          />
        </div>
        <div className="box-content m-4">
          <div>
            <p className="text-md font-semibold text-secondary">
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
          <div className="flex flex-col gap-4 text-secondary">
            <p className=" font-thin text-end">
              <strong className="border p-2 rounded-md  border-secondary">
                {situation}
              </strong>
            </p>
            <h1 className="font-bold text-start text-2xl text-shadoww border-b-4 border-secondary mb-6 pb-2 ">
              {title}
            </h1>
          </div>

          <div className="mb-4">
            <p className="text-sm text-secondary">{campDiscription}</p>
          </div>
          <div className="text-secondary">
            <h4 className="font-bold text-xl ">
              Author : <span className=" italic font-light ">{name}</span>
            </h4>
            <h4 className="font-bold text-xl ">
              Mail : <span className=" italic font-light ">{email}</span>
            </h4>
          </div>
          <div className="grid grid-cols-2 text-xl font-thin text-secondary justify-between gap-4 my-8">
            <p>
              Campaination Type : <span className="italic  ">{campType}</span>
            </p>
            <p>
              Min. donation Amount <span className="italic ">{donation}</span>{" "}
              TK
            </p>
            {situation==='Running' ? (
              <button
              className="btn btn-outline btn-ghost col-span-2 border border-secondary"
              onClick={donationHundler}
            >
              Donate
            </button>
            ) : (
              <button
              className="btn btn-outline btn-ghost col-span-2 border border-secondary">Time Over</button>
            )
            
            }
            
          </div>
        </div>
      </div>
    </>
  );
}
