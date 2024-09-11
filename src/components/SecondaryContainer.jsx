import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black ">
        <div className="relative z-20 pl-4 mt-0 md:mt-[52] md:pl-12">
          
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> {/* custom*/}
          <MovieList title={"Popular"} movies={movies.popularMovies} />  {/* custom*/}
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />  {/* custom*/}
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
          {/* 
      MovieList - Popular
        - MovieCard * n
      MovieList - NowPlaying
      MovieList - Horror
      MovieList - Comedy
      MovieList - Trending Now
      */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
