import { useEffect } from "react";
import { API_OPTIONS, UPCOMIMG_MOVIES_API_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import {addUpcomingMovies} from "../utils/movieSlice"

const useUpcomingMovies = () =>{

    //after fetching data update the store
    const dispatch = useDispatch(); 

    // for memoisation
    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

    // call the API
const getUpcomingMovies = async () =>{
    const data = await fetch(UPCOMIMG_MOVIES_API_URL,API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addUpcomingMovies(json.results))
}

useEffect(()=>{
  !upcomingMovies &&  getUpcomingMovies();
},[])
}

export default useUpcomingMovies;