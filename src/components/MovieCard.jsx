import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
 if(!poster_path) return null
  return (
    <div className="w-48 pr-2 duration-300 ease-in-out cursor-pointer hover:scale-110">
      <img src={IMG_CDN_URL + poster_path} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
