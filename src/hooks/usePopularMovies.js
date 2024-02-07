import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularmovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      options
    );
    const data = await res.json();
    // console.log(data?.results);
    dispatch(addPopularMovies(data?.results));
  };

  useEffect(() => {
    getPopularmovies();
  }, []);
};

export default usePopularMovies;
