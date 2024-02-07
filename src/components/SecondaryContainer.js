import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="md:-mt-48 relative z-20">
      <MovieList
        title={"Now Playing"}
        movies={movies.nowPlayingMovies}
        poster={1}
      />
      <MovieList
        title={"Popular Movies"}
        movies={movies.popularMovies}
        poster={0}
      />
      <MovieList
        title={"Top Rated Movies"}
        movies={movies.topRatedMovies}
        poster={1}
      />
      <MovieList
        title={"Upcoming Movies"}
        movies={movies.upcomingMovies}
        poster={0}
      />
      <MovieList
        title={"Most Watched"}
        movies={movies.popularMovies}
        poster={1}
      />
      <MovieList
        title={"Most Liked"}
        movies={movies.nowPlayingMovies}
        poster={0}
      />
    </div>
  );
};

export default SecondaryContainer;
