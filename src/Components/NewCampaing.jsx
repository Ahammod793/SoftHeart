import React, { useContext, useRef, useState } from "react";
import { DateTime } from "luxon";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

export default function Campaings() {
  const [selectedTime, setSelectedTime] = useState("");
  const [isCustomDate, setIsCustomDate] = useState(false);
  const [inputErr, setInputErr] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const campaignRef = useRef();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

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
    setImageURL(thumb);
  };

  const campaignHundler = (e) => {
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
    const donationAmount_ = form.donationAmount.value;
    const newCampaign = {
      campaignTitle,
      campaignType,
      file,
      campStart,
      campEnd,
      donationAmount_,
      name,
      email,
      description,
    };
    if (!file) {
      return setInputErr("Input Thumbnail");
    } else if (!campaignTitle) {
      return setInputErr("Input Title");
    } else if (!description) {
      return setInputErr("Input Description");
    } else if (!donationAmount_) {
      return setInputErr("Input Donation");
    } else if (!campStart) {
      return setInputErr("Input Start Date");
    } else if (!campEnd) {
      return setInputErr("Input End Date");
    } else {
      fetch(`http://localhost:5000/newcampaign`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCampaign),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            title: "success",
            text: "New Campaign Added",
            icon: "success",
          }).then(form.reset(), navigate("/campaigns"));
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-6 min-h-screen ">
      <form
        className="w-6/12 my-8"
        ref={campaignRef}
        onChange={() => setInputErr(null)}
      >
        <div className="flex flex-col my-5 shadow-2xl">
          <h2 className="font-medium text-left items-center p-1">
            Image or Thumbnail
          </h2>
          <div className="shadow p-3 items-center justify-center w-full h-auto   bg-warning  border border-secondary">
            <input
              type="url"
              placeholder="Thumbnail URL"
              name="file"
              onChange={inputImage}
              className="p-1 text-start items-center justify-center w-full"
            />
            {imageURL && (
              <div className="w-full h-[90%]">
                <Slide direction="down">
                  <img src={imageURL} className="w-full h-[400px] mt-5 border border-secondary" />
                </Slide>
              </div>
            )}
          </div>
        </div>
        <label className=" text-left items-center font-medium">
          HeadLine for Your Campaign <br />
          <input
            type="text"
            placeholder="Title   Like: Personal creative projects (Video Editing, Book Publishing)"
            name="titleForCampaign"
            className="border border-black h-10 border-double w-full mt-1 mb-5 p-4 bg-info text-secondary"
          />
        </label>
        <div className="flex flex-col">
          <h3 className="font-medium text-left items-center">Campaign Type</h3>
          <label className="flex flex-col">
            <select
              name="campaignType"
              id="campaignType"
              className="font-light  mt-1 mb-5 p-2 border text-black"
            >
              <option value="personal">Personal</option>
              <option value="startUp">StartUp</option>
              <option value="business">Business</option>
              <option value="creativeIdea">Creative Ideas</option>
            </select>
          </label>
        </div>

        {/* <div>
          <label className="flex flex-col">
            <h2 className="font-medium  text-left items-center p-1">
              Who can join this Campaign?
            </h2>
            <select
              name="applyer"
              className="font-light  mt-1 mb-5 p-2 border border-black"
            >
              <option value="socialWorkers">Social Workers</option>
              <option value="everyone">Everyone</option>
              <option value="businessman">Businessman</option>
            </select>
          </label>
        </div> */}

        <div className="w-full mt-2 mb-2">
          <h2 className="font-medium text-left items-center p-1">
            Campaign Details:
          </h2>
          <textarea
            name="campDetails"
            className="p-2 w-full h-[200px] text-lg font-light border border-black bg-info text-secondary"
          ></textarea>
        </div>
        <div className="flex flex-col  gap-2 my-2">
          <h2 className="font-medium text-left items-center p-1">
            Min. Donation Amount
          </h2>
          <input
            type="number"
            placeholder="Minimum donation amount"
            name="donationAmount"
            required
            className=" border border-black p-4 text-secondary bg-info"
          />
        </div>
        <div className="flex justify-around items-start mt-4">
          <div className="mb-3">
            <h3 className="font-medium pb-1 ">When will it start?</h3>
            <select
              id="vv"
              onChange={handleSelectChange}
              className="border border-black rounded-md p-1 bg-info text-secondary"
            >
              <option value={DateTime.now().toISO()}>Now</option>
              <option value="custom">Custom Date</option>
            </select>
            {isCustomDate && (
              <div className="p-1 ">
                <input
                  type="datetime-local"
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className=" font-medium border border-black rounded-md p-1 bg-info text-secondary"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium pb-1 ">Campaign Will End at -</h2>
            <input
              type="datetime-local"
              name="endTime"
              id="endTime"
              className=" font-medium border border-black rounded-md p-1 bg-info text-secondary"
            />
          </div>
        </div>
        <div className="flex flex-col  gap-2">
          <h2 className="font-medium  text-left items-center p-1">Author</h2>
          <div className="shadow p-3 items-center justify-center w-full h-auto  border border-blue-200">
            <div className="flex flex-row gap-20 text-secondary">
              <h4 className="text-bold  text-[16px]">Name :</h4>
              <h1 className="text-bold text-[14px]">{user.displayName}</h1>
            </div>
            <div className="flex flex-row gap-20 text-secondary">
              <h4 className="text-bold  text-[16px]">Email : </h4>
              <h1 className="text-bold text-[14px]">{user.email}</h1>
            </div>
          </div>
        </div>
        <div className="items-center justify-center">
          <h4 className="font-light">{inputErr}</h4>
        </div>
      </form>
      <div className="flex items-end justify-end w-6/12 gap-6">
        <button className="btn btn-outline  text-secondary bg-success" onClick={campaignHundler}>
          Add
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
