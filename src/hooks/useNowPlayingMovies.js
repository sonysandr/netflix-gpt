import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
// import { dummyData } from "../utils/dummyData";
import { API_OPTIONS, TOP_MOVIES_API_URL } from "../utils/constants";
import {useDispatch, useSelector} from "react-redux"


const useNowPlayingMovies = () =>{

    //  fetch data from api and update store
  const dispatch = useDispatch();

  // memoisation
  const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);

  // API CALL function
  const getNowPlayingMovies = async () => {
     const data = await fetch(TOP_MOVIES_API_URL, API_OPTIONS);
     const json = await data.json();
      // console.log(json);
    // const dummy = dummyData;
    // dispatch(addNowPlayingMovies(json));
    
    // using dummy data as the api call limit reached
    dispatch(addNowPlayingMovies(json.results));
  };

  // we make the api call insde  the useEffect() hook
  useEffect(() => {
   !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;