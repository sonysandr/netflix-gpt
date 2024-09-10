import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) {
    return null;
  }
  return (
    <div className="p-4 m-4 text-white bg-black bg-opacity-90">
      
        {movieNames.map((movieName,index) => {
          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          );
        })}
     
      
    </div>
  );
};

export default GptSearchSuggestions;
