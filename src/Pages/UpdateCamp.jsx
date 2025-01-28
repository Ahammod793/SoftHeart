import React, { useContext, useRef, useState } from "react";
import { DateTime } from "luxon";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

export default function UpdateCamp() {
  const [selectedTime, setSelectedTime] = useState("");
  const [isCustomDate, setIsCustomDate] = useState(false);
  const [imageURL, setImageURL] = useState(null)
  const campaignRef = useRef();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const campData = useLoaderData()
  const {_id,title,file,campType,campaignStart,campaignEnd, campDiscription,donation}= campData
  // console.log(campData)
  const handleCustomDate = () => {
    setIsCustomDate(true);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === "custom") {
      handleCustomDate();
    } else {
      setSelectedTime(value);
      setIsCustomDate(false);
    }
  };

  const inputImage = (e) => {
    const thumb = e.target.value;
    setImageURL(thumb)
  };

  const updateCamp = (e) => {
    e.preventDefault();
    const form = campaignRef.current;
    const campaignTitle = form.titleForCampaign.value;
    const campaignType = form.campaignType.value;
    const file = form.file.value;
    const campStart = selectedTime || DateTime.now().toISO();
    const campEnd = form.endTime.value;
    const name = user.displayName;
    const email = user.email;
    const description = form.campDetails.value;
    const donationAmount_ = form.donationAmount.value
    const UpdCampaign = {
      campaignTitle,
      campaignType,
      file,
      campStart,
      campEnd,
      donationAmount_,
      name, email,
      description,
    };
    // console.log(UpdCampaign);
    fetch(`http://localhost:5000/updateCamp/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "success",
          text: "campaign Updated",
          icon: "success",
        }).then(form.reset(), navigate("/campaigns"));
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mb-6 min-h-screen">
      <form className="w-6/12 my-8" ref={campaignRef}>
        <div className="flex flex-col ">
          <h2 className="font-medium text-black text-left items-center p-1">
            Image or Thumbnail
          </h2>
          <div className="shadow p-3 items-center justify-center w-full h-auto mb-5 border border-blue-200">
            <input
              type="url"
              placeholder="Thumbnail URL"
              name="file"
              onChange={inputImage}
              className="p-1 text-start items-center justify-center w-full"
              defaultValue={file}
            />
            {imageURL && (
              <div className="w-full h-[90%]">
                  <Slide direction="down">
                    <img src={imageURL} className="w-full h-[400px] pt-4" />
                  </Slide>
              </div>
            )}
          </div>
        </div>
        <label className="text-black text-left items-center font-medium">
          HeadLine for Your Campaign <br />
          <input
            type="text"
            placeholder={title}
            defaultValue={title}
            name="titleForCampaign"
            className="border border-black h-10 border-double w-full mt-1 mb-5 p-4"
          />
        </label>
        <div className="flex flex-col">
          <h3 className="font-medium text-black text-left items-center">
            Campaign Type
          </h3>
          <label className="flex flex-col">
            <select
              name="campaignType"
              id="campaignType" defaultValue={campType}
              className="font-light text-black mt-1 mb-5 p-2 border border-black"
            >
              <option value="personal">Personal</option>
              <option value="startUp">StartUp</option>
              <option value="business">Business</option>
              <option value="creativeIdea">Creative Ideas</option>
            </select>
          </label>
        </div>


        <div className="w-full mt-2 mb-2">
          <h2 className="font-medium text-black text-left items-center p-1">
            Campaign Details:
          </h2>
          <textarea 
            defaultValue={campDiscription}
            name="campDetails"
            className="p-2 w-full h-[200px] text-lg font-light border border-black"
          ></textarea>
        </div>
        <div className="flex flex-col  gap-2 my-2">
          <h2 className="font-medium text-black text-left items-center p-1">
            Min. Donation Amount
          </h2>
          <input
            type="number"
            defaultValue={donation}
            name="donationAmount"
            required
            className="text-black border border-black p-4 "
          />
        </div>
        <div className="flex justify-around items-start mt-4">
          <div className="mb-3">
            <h3 className="font-medium pb-1 text-black">When will it start?</h3>
            <select
              id="vv" defaultValue={campaignStart}
              onChange={handleSelectChange}
              className="border border-black rounded-md p-1"
            >
              <option value={DateTime.now().toISO()}>Now</option>
              <option value="custom">Custom Date</option>
            </select>
            {isCustomDate && (
              <div className="p-1 text-black">
                <input
                  type="datetime-local"
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="text-black font-medium border border-black rounded-md p-1"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium pb-1 text-black">
              Campaign Will End at -
            </h2>
            <input
              type="datetime-local" defaultValue={campaignEnd}
              name="endTime"
              id="endTime"
              className="text-black font-medium border border-black rounded-md p-1"
            />
          </div>
        </div>
        <div className="flex flex-col  gap-2">
          <h2 className="font-medium text-black text-left items-center p-1">
            Author
          </h2>
          <div className="shadow p-3 items-center justify-center w-full h-auto  border border-blue-200">
            <div className="flex flex-row gap-20">
              <h4 className="text-bold text-black text-[16px]">Name :</h4>
              <h1 className="text-bold text-[14px]">{user.displayName}</h1>
            </div>
            <div className="flex flex-row gap-20">
              <h4 className="text-bold text-black text-[16px]">Email : </h4>
              <h1 className="text-bold text-[14px]">{user.email}</h1>
            </div>
          </div>
        </div>
      </form>
      <div className="flex items-end justify-end w-6/12 gap-6">
        <button className="btn btn-primary" onClick={updateCamp}>
          Update
        </button>
        <button
          className="btn btn-outline"
          onClick={() => {
            campaignRef.current.reset();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
