import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4">
      {movieNames.map((movieName, index) => {
        return (
          <MovieList
            key={index}
            title={movieName}
            movies={movieResults[index]}
            poster={1}
          />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
