import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //   early return
  if (movies === null) return; //or do if(!movies) return;

  const mainMovie = movies[0]; //selecting a main movie for the maincontainer
  // console.log(mainMovie);

//   destructure
const {title,overview,id} = mainMovie;

  return (
    <div className="pt-[30%] md:pt-0 bg-black" >
      <VideoTitle title={title} overview = {overview}  />
      <VideoBackground  movie_id={id}  />
    </div>
  );
};

export default MainContainer;
