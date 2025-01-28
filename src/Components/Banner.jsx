import React, { useState, useEffect, useRef } from "react";
import image from "../assets/thousand.jpg";
import share from "../assets/story.jpg";
import manSmilling from "../assets/man-smiling-people-crowd.webp";
import { Fade, Slide } from "react-awesome-reveal";
const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const banners = [
    (<div className="flex justify-center border border-red-300 items-center bg-slate-700 text-white h-96">
        <div className="items-center text-center gap-4 pt-12 pr-4 rotate-[5deg]">
          <span className="text-2xl">Hi,</span>
          <span className="text-amber-300 font-bold text-6xl">Donors!</span>
          <h3 className="font-medium text-2xl pt-4 ps-5 -rotate-[5deg]">
            Join Hands to Make a Difference with &nbsp;
            <span className="text-pink-600 underline decoration-dashed decoration-orange-400">
              SoftHeart
            </span>
            .
          </h3><br />
          <div className="flex -rotate-[5deg]">
           <p className="text-medium">SHARE YOUR THINKING WITH OTHERS<br />& <br /> <span className="text-purple-400 font-bold text-2xl">show them</span> <br />
           <Fade direction="top-left"><span className="text-3xl text-[#99f3a7] font-bold">HOW CREATIVE YOU ARE!</span>
           </Fade></p>
            </div>
        </div>
       <Slide direction="down"> <div className="relative top-[5px] -right-20 rotate-[45deg] flex flex-col">
          <span className="bg-blue-100 text-red-600 animate-ping text-xl " style={{ animationDelay: '0.9s' }}>&uArr;</span>
          <span className="bg-blue-100 text-red-300 animate-ping text-xl " style={{ animationDelay: '0.8' }}>&uArr;</span>
          <span className="bg-blue-100 text-yellow-300 animate-ping text-xl " style={{ animationDelay: '0.7s' }}>&uArr;</span>
          <span className="bg-blue-100 text-yellow-600 animate-ping text-xl " style={{ animationDelay: '0.6s' }}>&uArr;</span>
          <span className="bg-blue-100 text-green-500 animate-ping text-xl " style={{ animationDelay: '0.5s' }}>&uArr;</span>
          <span className="bg-blue-100 text-red-300 animate-ping text-xl " style={{ animationDelay: '0.5s' }}>&uArr;</span>
          <span className="bg-blue-100 text-red-600 animate-ping text-xl " style={{ animationDelay: '0.4s' }}>&uArr;</span>
          <span className="bg-blue-100 text-yellow-300 animate-ping text-xl " style={{ animationDelay: '0.3s' }}>&uArr;</span>
          <span className="bg-blue-100 text-yellow-600 animate-ping text-xl " style={{ animationDelay: '0.2s' }}>&uArr;</span>
          <span className="bg-blue-100 text-green-500 animate-ping text-xl" style={{ animationDelay: '1s' }}>&uArr;</span>
        </div>
</Slide>
      </div>),
    <div className="flex justify-center items-center bg-slate-700 text-white h-96">
      <div>
        <img src={share} alt="" className="w-full h-full" />
      </div>
      <div className="">
        <h2 className="font-bold text-green-100">Start Your Campaign</h2>
        <h1 className="relative top-8 left-8 flex h-8 font-thin font-mono text-white">
          Find People Those Wil Help <br /> to Complete Your Project
        </h1>
      </div>
    </div>,
    <div className="bg-cover flex justify-center items-center bg-slate-700 text-white h-96">
      <h3 className="font-medium text-2xl ps-6">
        Get your idea in front of thousands of potential supporters.
      </h3>
      <img src={manSmilling} alt="" className="w-full h-full" />
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
   startAutoSlide()
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
          className="absolute left-4 bg-slate-100 p-2 w-8 h-8 flex items-center justify-center rounded-full text-black" 
        >
          ❮
        </button>
        <div className="w-3/4 p-4 bg-white rounded-lg shadow-md text-center my-16">
          {banners[currentIndex]}
        </div>
        <button
          onClick={handleNext} 
          className="absolute right-4 bg-slate-100 p-2 w-8 h-8 flex items-center justify-center rounded-full text-black"
        >
          ❯
        </button>
      </div>
    </>
  );
};

export default BannerCarousel;
