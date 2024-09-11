import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="p-6 bg-transparent">
      <h1 className="py-6 text-xl text-white md:text-3xl sm:text-2xl ">{title}</h1>
      <div className="flex overflow-hidden hover:overflow-x-scroll whitespace-nowrap">
        <div className="flex flex-row ">
          {movies?.map((movie, index) => (
            <MovieCard key={index} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
