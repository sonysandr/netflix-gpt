import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  // custom hook for fetching
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      Main Container 
        - video bg
        - video title
      Secondary Container
        - Movie Lists * n
        - cards * n  
      */}
    </div>
  );
};

export default Browse;
