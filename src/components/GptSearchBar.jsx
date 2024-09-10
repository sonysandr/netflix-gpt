import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex   items-center py-[10%] ">
      <form
        action=""
        className="flex items-center justify-center w-full bg-black"
      >
        <input
          type="text"
          className="p-4 m-4 w-[40%] rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
          //   placeholder="what would you like to watch today"
        />
        <button className="px-8 py-4 text-white bg-red-500 rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
