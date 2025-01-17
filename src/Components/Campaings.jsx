import React, { useRef, useState } from "react";
import share from "../assets/story.jpg";
import { DateTime } from "luxon";
import { Slide } from "react-awesome-reveal";

export default function Campaings() {
  const [selectedTime, setSelectedTime] = useState("");
  const [isCustomDate, setIsCustomDate] = useState(false);
  const [imgVideoBool, setImgVideoBool] = useState(false);
  const [imgVideoData, setImgVideoData] = useState("");
  const campaignRef = useRef();

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

  const inputImageOrVideo = (e) => {
    const isItem = e.target.files;
    if (isItem.length > 0) {
      setImgVideoBool(true);
      setImgVideoData({
        url: URL.createObjectURL(isItem[0]),
        type: isItem[0].type,
      });
      console.log(isItem[0]);
    }
  };

  const campaignHundler = (e) => {
    e.preventDefault();
    const form = campaignRef.current;
    const campaignTitle = form.titleForCampaign.value;
    const campaignType = form.campaignType.value;
    const file = form.file.files[0];
    const campStart = selectedTime || DateTime.now().toISO();
    const campEnd = form.endTime.value;
    const applyer = form.applyer.value;
    const description = form.campDetails.value;
    const donationNeed = form.donationWilling.value === "true";
    const newCampaign = {
      campaignTitle,
      campaignType,
      file,
      campStart,
      campEnd,
      applyer,
      description,
      donationNeed,
    };

    console.log(newCampaign);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <form className="w-6/12 my-8" ref={campaignRef}>
        <label className="text-black text-left items-center font-medium">
          HeadLine for Your Campaign <br />
          <input
            type="text"
            placeholder="Title   Like: Personal creative projects (Video Editing, Book Publishing)"
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
              id="campaignType"
              className="font-light text-black mt-1 mb-5 p-2 border border-black"
            >
              <option value="personal">Personal</option>
              <option value="donation">Donation</option>
              <option value="social">Social Change Campaigns</option>
              <option value="fundraising">Fund Raising Campaigns</option>
            </select>
          </label>
        </div>

        <div className="flex flex-col shadow p-3 items-center justify-center w-full h-auto my-5 border border-blue-200">
          <input
            type="file"
            name="file"
            onChange={inputImageOrVideo}
            className="pb-3"
          />
          {imgVideoBool && (
            <div className="w-full h-[90%]">
              {imgVideoData.type.match("image") ? (
                <Slide direction="down">
                  <img src={imgVideoData.url} className="w-full h-[400px]" />
                </Slide>
              ) : (
                <Slide direction="down">
                  <video
                    src={imgVideoData.url}
                    controls
                    className="w-full h-[400px]"
                  ></video>
                </Slide>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-around items-start mt-4">
          <div className="mb-3">
            <h3 className="font-medium pb-1 text-black">When will it start?</h3>
            <select
              id="vv"
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
              type="datetime-local"
              name="endTime"
              id="endTime"
              className="text-black font-medium border border-black rounded-md p-1"
            />
          </div>
        </div>
        <div>
          <label className="flex flex-col">
            <h2 className="font-medium text-black text-left items-center p-1">
              Who can join this Campaign?
            </h2>
            <select
              name="applyer"
              className="font-light text-black mt-1 mb-5 p-2 border border-black"
            >
              <option value="socialWorkers">Social Workers</option>
              <option value="everyone">Everyone</option>
              <option value="businessman">Businessman</option>
            </select>
          </label>
        </div>
        <div className="w-full mt-2 mb-2">
          <h2 className="font-medium text-black text-left items-center p-1">
            Campaign Details:
          </h2>
          <textarea
            name="campDetails"
            className="p-2 w-full h-[200px] text-lg font-light border border-black"
          ></textarea>
        </div>
        <div className="flex flex-row gap-9 text-center items-center">
          <h1 className="font-medium text-black text-left items-center p-1">
            Donation Needed?
          </h1>
          <label htmlFor="" className="text-black">
            Yes <input type="radio" name="donationWilling" value="true" />
          </label>
          <label htmlFor="" className="text-black">
            No &nbsp;
            <input type="radio" name="donationWilling" value="false" />
          </label>
        </div>
      </form>
      <div className="flex items-end justify-end w-6/12 gap-6">
        <button className="btn btn-primary" onClick={campaignHundler}>
          Save
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
