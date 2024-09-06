import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = ({movie_id}) => {
 
    const dispatch = useDispatch();
  // fetch trailer video && updating the store with trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movie_id +"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    // filter all with type Trailer
    const filterData = json.results.filter((video) => video.type === "Trailer");
    // in case of no type Trailer or multiple type Trailers
    const trailer = filterData.length ? filterData[0] : json.results[0]; //json.result[0] is the first result of the filtered result
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useMovieTrailer
