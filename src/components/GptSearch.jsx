import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div>
        <img className="fixed -z-10" src={BG_URL} alt="bgimage" />
      </div>
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearch;
