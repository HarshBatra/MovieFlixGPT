import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  //   console.log(trailerVideo);

  return (
    <div className="w-full h-full relative">
      <div className="h-1/3 w-full z-0 bg-gradient-to-t from-black absolute bottom-0"></div>
      <div className="h-full w-1/4 z-0 bg-gradient-to-r from-black absolute left-0"></div>
      <div className="h-full w-1/4 z-0 bg-gradient-to-l from-black absolute right-0"></div>

      <iframe
        className="w-full h-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?controls=0&autoplay=1&mute=1&modestbranding=1&loop=1&rel=1&showinfo=0&playlist=" +
          trailerVideo?.key
        }
        title="Trailer"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
