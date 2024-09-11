import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen md:px-24 sm:px-12 px-6 text-white pt-[20%] bg-gradient-to-r from-black aspect-video">
      <h1 className="text-xl font-bold md:text-3xl sm:text-2xl">{title}</h1>
      <p className="md:w-2/4 md:py-6 text-[12px] md:text-lg sm:text-lg sm:line-clamp-4 line-clamp-2 md:line-clamp-4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="px-3 py-1 mr-2 text-base font-bold text-black bg-white rounded-lg md:py-4 md:px-12 hover:bg-gray-200 hover:text-black hover:bg-opacity-80 sm:px-6 sm:py-2 sm:text-lg md:text-xl">
          ▶️Play
        </button>
        <button className="px-3 py-1 text-base font-bold text-white bg-gray-500 bg-opacity-50 rounded-lg md:py-4 md:px-12 sm:px-6 sm:py-2 hover:bg-gray-200 hover:text-black sm:text-lg md:text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
