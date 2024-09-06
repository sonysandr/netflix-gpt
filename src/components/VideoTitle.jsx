import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen px-24 text-white pt-[20%] bg-gradient-to-r from-black aspect-video">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="w-2/4 py-6 text-lg ">{overview}</p>
      <div className="">
        <button className="px-12 py-4 mr-2 font-bold text-black bg-white rounded-lg hover:bg-gray-200 hover:text-black hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="px-12 py-4 font-bold text-white bg-gray-500 bg-opacity-50 rounded-lg hover:bg-gray-200 hover:text-black ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
