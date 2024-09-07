import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  // custom hook to fetch trailer video and update the store with the trailer video data
  useMovieTrailer({movie_id})
  return (
    <div className="w-screen" >
      {/* */}
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; "
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
