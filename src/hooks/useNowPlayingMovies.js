import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options
    );
    const data = await res.json();
    // console.log(data?.results);
    dispatch(addNowPlayingMovies(data?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
