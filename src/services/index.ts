const baseURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const getNowPlayingMovies = (page: number) =>
  fetch(
    `${baseURL}/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`
  );
