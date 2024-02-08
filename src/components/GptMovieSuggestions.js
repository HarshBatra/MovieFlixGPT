import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4">
      {movieNames.map((movieName, index) => {
        <MovieList title={movieName} movies={movieResults[index]} poster={0} />;
      })}
    </div>
  );
};

export default GptMovieSuggestions;
