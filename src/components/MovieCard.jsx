import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="pr-2 duration-300 ease-in-out cursor-pointer md:w-48 hover:scale-110 sm:w-48 w-36">
      <img src={IMG_CDN_URL + poster_path} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
