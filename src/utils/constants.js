export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const img_cdn = "https://image.tmdb.org/t/p/original/";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
