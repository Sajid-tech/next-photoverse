"use client";
import React from "react";

const Hero = ({ heading, message }) => {
  const scrollToHeroSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button
          onClick={scrollToHeroSection}
          style={{ transition: "all .15s ease" }}
          className="px-8 py-2 border"
        >
          See
        </button>
      </div>
    </div>
  );
};

export default Hero;
