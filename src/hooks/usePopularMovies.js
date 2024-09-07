import { useEffect } from "react";
import {  addPopularMovies } from "../utils/movieSlice";
// import { dummyData } from "../utils/dummyData";
import { API_OPTIONS, POPULAR_MOVIES_API_URL } from "../utils/constants";
import {useDispatch} from "react-redux"


const usePopularMovies = () =>{

    //  fetch data from api and update store
  const dispatch = useDispatch();

  // API CALL function
  const getPopularMovies = async () => {
     const data = await fetch(POPULAR_MOVIES_API_URL, API_OPTIONS);
     const json = await data.json();
      // console.log(json);
    // const dummy = dummyData;
    // dispatch(addNowPlayingMovies(json));
    
    // using dummy data as the api call limit reached
    dispatch(addPopularMovies(json.results));
  };

  // we make the api call insde  the useEffect() hook
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;