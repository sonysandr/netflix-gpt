import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <>
      <div className=" -z-10">
        <img
          className="fixed object-cover w-screen h-screen -z-10"
          src={BG_URL}
          alt="bgimage"
        />
      </div>
      <div className="md:pt-[0] sm:pt-[178px] pt-[150px] ">
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
