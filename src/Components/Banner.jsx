import React, { useState, useEffect, useRef } from "react";
import image from "../assets/thousand.jpg";
import share from "../assets/story.jpg";
import manSmilling from "../assets/man-smiling-people-crowd.webp";
import { Fade, Slide } from "react-awesome-reveal";
const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const banners = [
    <div className="flex justify-center items-center  h-96">
      <div className="items-center text-center  pt-10 lg:pt-12 pr-4 rotate-[5deg]">
        <span className="text-2xl">Hi,</span>
        <span className=" md:font-normal font-light lg:font-bold text-3xl md:text-4xl lg:text-6xl">Donors!</span>
        <h3 className="lg:font-medium md:font-normal font-light lg:text-2xl sm:text-xl lg:pt-4 sm:pt-2 ps-5 -rotate-[5deg]">
          Join Hands to Make a Difference with &nbsp;
          <span className=" underline decoration-dashe text-blue-400">
            SoftHeart
          </span>
          .
        </h3>
        <br />
        <div className="flex -rotate-[5deg] text-center items-center flex-col">
          <p className="font-light md:font-normal text-center lg:font-medium sm:text-3xl md:text-4xl">
            SHARE YOUR THINKING WITH OTHERS
            <br />& <br />{" "}
            <span className="font-bold text-2xl">
              show them
            </span>{" "}
            <br />
            <Fade direction="top-left">
              <span className="text-3xl  font-bold">
                HOW CREATIVE YOU ARE!
              </span>
            </Fade>
          </p>
        </div>
      </div>
      <Slide direction="down">
        {" "}
        <div className="relative top-[5px] -right-70 rotate-[10deg] lg:rotate-[10deg] flex flex-col">
          <span
            className="bg-blue-100 text-red-600 animate-ping text-xl "
            style={{ animationDelay: "0.9s" }}
          >
            &uArr;
          </span>
          <span
            className="bg-blue-100 text-red-300 animate-ping text-xl "
            style={{ animationDelay: "0.8" }}
          >
            &uArr;
          </span>
          <span
            className="bg-blue-100 text-yellow-300 animate-ping text-xl "
            style={{ animationDelay: "0.7s" }}
          >
            &uArr;
          </span>
          <span
            className="bg-blue-100 text-yellow-600 animate-ping text-xl "
            style={{ animationDelay: "0.6s" }}
          >
            &uArr;
          </span>
          <span
            className="bg-blue-100 text-green-500 animate-ping text-xl "
            style={{ animationDelay: "0.5s" }}
          >
            &uArr;
          </span>
          <span
            className="bg-blue-100 text-red-300 animate-ping text-xl "
            style={{ animationDelay: "0.5s" }}
          >
            &uArr;
          </span>
          <span
            className="bg-blue-100 text-red-600 animate-ping text-xl "
            style={{ animationDelay: "0.4s" }}
          >
            &uArr;
          </span>
          <span
            className="bg-blue-100 text-yellow-300 animate-ping text-xl "
            style={{ animationDelay: "0.3s" }}
          >
            &uArr;
          </span>
          <span
            className="bg-blue-100 text-yellow-600 animate-ping text-xl "
            style={{ animationDelay: "0.2s" }}
          >
            &uArr;
          </span>
          <span
            className="bg-blue-100 text-green-500 animate-ping text-xl"
            style={{ animationDelay: "1s" }}
          >
            &uArr;
          </span>
        </div>
      </Slide>
    </div>,
    <div className="flex flex-col lg:flex-row justify-center items-center  h-96">
      <div>
        <img src={share} alt="" className="w-full h-full" />
      </div>
      <div className="mt-4 text-center flex flex-col">
        <h2 className="font-bold ">Start Your Campaign</h2>
        <h1 className="relative md:top-4 top-2 lg:top-8 lg:left-8 flex h-8 font-thin font-mono">
          Find People Those Wil Help <br /> to Complete Your Project
        </h1>
      </div>
    </div>,
    <div className="bg-cover flex justify-center items-center
      h-96">
      <h3 className="font-medium text-2xl ps-6 text-center p-4">
        Get your idea in front of thousands of potential supporters.
      </h3>
      <img src={manSmilling} alt="" className="md:w-10/12 w-6/12 lg:w-full h-full" />
    </div>,
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <>
      <div
        className="carousel relative flex items-center justify-center"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <button
          onClick={handlePrev}
          className="absolute left-4 bg-slate-100 p-1 lg:p-2 w-8 h-8 flex items-center justify-center rounded-full text-black"
        >
          ❮
        </button>
        <div className="w-full lg:w-3/4 p-4 bg-info text-secondary rounded-lg shadow-md text-center md:my-8 my-6 lg:my-16">
          {banners[currentIndex]}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 bg-slate-100 p-1 lg:p-2 w-8 h-8 flex items-center justify-center rounded-full text-black"
        >
          ❯
        </button>
      </div>
    </>
  );
};

export default BannerCarousel;
