import React from "react";
import { img_cdn } from "../utils/constants";

const MovieCard = ({ movie, poster }) => {
  //   console.log(movie);
  if (!movie?.backdrop_path || !movie?.poster_path) return null;
  return (
    <>
      {!poster ? (
        <img
          className="rounded-lg drop-shadow-xl md:w-1/6 w-1/2 md:m-4 m-2 cursor-pointer hover:scale-110"
          alt={movie?.original_title}
          src={img_cdn + movie?.backdrop_path}
        />
      ) : (
        <img
          className="drop-shadow-xl md:w-1/6 w-1/2 m-2 cursor-pointer hover:scale-105"
          alt={movie?.original_title}
          src={img_cdn + movie?.poster_path}
        />
      )}
    </>
  );
};

export default MovieCard;
