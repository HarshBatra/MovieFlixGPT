import React, { useRef } from "react";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const gptQuery =
    "Act as a Movie Recommendation System and suggest some movies for the query: " +
    searchText?.current?.value +
    ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const fetchMovieTMDB = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?page=1&query=" + movie,
      options
    );
    const data = await res.json();
    // console.log(data?.results);
    return data?.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    const GPTResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(GPTResults?.choices?.[0]?.message?.content);
    const gptMovies = GPTResults?.choices?.[0]?.message?.content.split(", ");
    const promiseArray = gptMovies?.map((movie) => {
      return fetchMovieTMDB(movie);
    });
    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <form
      className="flex items-center gap-4 md:w-1/2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="px-4 py-2 text-black bg-white bg-opacity-75 rounded-xl w-full"
        type="text"
        ref={searchText}
        placeholder="Search GPT here..."
      />
      <button
        onClick={handleGptSearchClick}
        className="bg-red-600 rounded-xl px-4 py-2 cursor-pointer hover:bg-white hover:text-red-600"
      >
        Search
      </button>
    </form>
  );
};

export default GptSearchBar;
