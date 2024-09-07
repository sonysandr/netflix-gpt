import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-6 bg-transparent">
      <h1 className="py-6 text-3xl text-white ">{title}</h1>
      <div className="flex overflow-hidden t hover:overflow-x-scroll whitespace-nowrap">
        <div className="flex flex-row ">
          {movies?.map((movie) => (
            <MovieCard key={movies.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
