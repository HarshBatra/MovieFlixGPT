import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white md:absolute top-10 md:top-1/3 drop-shadow-lg w-2/3 text-xs md:text-base md:w-1/3 md:pl-20 pl-10 py-10 flex flex-col md:gap-4 gap-2 z-10">
      <div className="md:text-5xl font-bold text-2xl ">{title}</div>
      <div>{overview}</div>
      <div className="flex gap-4 text-nowrap">
        <div className="drop-shadow-lg bg-red-600 px-2 py-1 md:px-4 md:py-2 rounded-lg cursor-pointer flex gap-2 items-center hover:bg-white hover:text-red-600">
          <FaPlayCircle className="md:w-5 md:h-5" />
          Play Now
        </div>
        <div className="border-white border-2 rounded-lg px-2 py-1 md:px-4 md:py-2 cursor-pointer flex gap-2 items-center">
          <GoInfo className="md:w-5 md:h-5" />
          More info
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
