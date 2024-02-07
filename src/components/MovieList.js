import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const MovieList = ({ title, movies, poster }) => {
  const ref = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = ref.current;
    const scrollAmount = 200;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
      setScrollPosition(container.scrollLeft);
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
      setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <div className="md:px-10 px-5 py-2 md:py-5 text-white">
      <div className="font-bold tracking-wider md:m-2">{title}</div>
      <div className="flex items-center gap-2">
        <IoIosArrowDropleft
          className="w-5 h-5 text-gray-500 cursor-pointer"
          onClick={() => handleScroll("left")}
        />
        <div
          className="flex w-full overflow-scroll scroll-smooth no-scrollbar"
          ref={ref}
        >
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} poster={poster} />;
          })}
        </div>
        <IoIosArrowDropright
          className="w-5 h-5 text-gray-500 cursor-pointer"
          onClick={() => handleScroll("right")}
        />
      </div>
    </div>
  );
};

export default MovieList;
