import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
// import openAi from "../utils/openAi";
// import Error from "./Error";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search TMDB for movies from the gptResults
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    // const gptQuery =
    //   "Act as a movie recomendation system and Suggest some movies for the query of " +
    //   searchText.current.value +
    //   ". Only give me names of 5 Movies, comma seperated like the example result given ahead. Example Result: Rango, Predator, Terminator, Matrix, Kingkong ";
    //make an api call to get movie results

    // const gptResults = await openAi.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // if(!gptResults.choices) {
    //   <Error/>
    // }
    // "King Kong,Terminator,Rango,Eagle Eye,God Father"
    const gptResultsA = "Interstellar, Terminator, Rango,EagleEye, God Father";
    const gptResults = gptResultsA.split(",");
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // split() is method applied on string to get an array as a result
    // ["King Kong","Terminator","Rango","Eagle Eye","God Father"]

    //commenting out the above because of Issue with openai api limit, thus using a dummy data below
    const gptMovies = [
      "Interstellar",
      "Terminator",
      "Rango",
      "Eagle Eye",
      "God Father",
    ];
    // Search tmdb api for each movie
    const data = gptMovies.map((movie) => searchMovieTmdb(movie));
    // map fn makes the 5 api calls immediately without waiting for the results
    //since we are using map() we'll get an array of 5 promises [promise,promise,promise,promise,promise]

    // Now to get the results, we use Promise.all() & we await for Promise.all() to finish

    const tmdbResults = await Promise.all(data);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptResults,movieResults:tmdbResults}));
  };
  return (<>
 
    <div className="flex   items-center py-[10%] ">
      <form
        action=""
        className="flex items-center justify-center w-full bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 w-[40%] rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
          //   placeholder="what would you like to watch today"
        />
        <button
          className="px-8 py-4 text-white bg-red-500 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
        
      </form>
    </div>
    
    </>
  );
};

export default GptSearchBar;
